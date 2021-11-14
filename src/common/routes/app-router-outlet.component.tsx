import * as React from 'react'
import { Suspense } from 'react';
import { BrowserRouter, RouteComponentProps, withRouter } from 'react-router-dom';
import { from, Observable, Subject, takeUntil } from 'rxjs';
import { IRouteConfig, OutLetProps } from './config';
import { ObjectMap } from './typing';


enum RenderState {
  resolved,
  resolving,
  notResolved
}

class RenderedRouteComponent extends React.Component<IRouteConfig & RouteComponentProps> {
  state: ObjectMap = {
    renderState: RenderState.resolving
  }
  private componentDestroyed = new Subject()

  componentDidMount(): void {
    if (this.props.guards) {
      from(this.resolveGuards(this.props.guards))
        .pipe(takeUntil(this.componentDestroyed))
        .subscribe(result => {
          const renderState = result ? RenderState.resolved : RenderState.notResolved;
          this.setState({ renderState });
        });
    } else {
      this.setState({ renderState: RenderState.resolved });
    }
  }

  componentWillUnmount(): void {
    this.componentDestroyed.complete();
  }

  private async resolveGuards(guards: any[]): Promise<boolean> {
    guards = [...guards.reverse()]
    return new Promise(resolve => {
      const runGuards = async (guards: any[]) => {
        const guard = guards.pop()
        if (guard) {
          const result = guard(this.props)
          switch (true) {
            case typeof result === 'boolean':
              result ? await runGuards(guards) : resolve(result);
              break;
            case result instanceof Promise:
              const promiseResult = await result;
              promiseResult ? await runGuards(guards) : resolve(promiseResult);
              break;
            case result instanceof Observable:
              const obResult = await result.toPromise();
              obResult ? await runGuards(guards) : resolve(obResult);
              break;
          }
        } else {
          resolve(true)
        }
      }
      runGuards(guards)
    })
  }
  render() {
    const { ...rest } = this.props;
    switch (this.state.renderState) {
      case RenderState.resolved:
        return
      case RenderState.resolving:
        return <h2 style={{ textAlign: "center" }}>Loading</h2>;
      case RenderState.notResolved:
        return null;
    }
  }
}

const RenderedRoute = withRouter(RenderedRouteComponent)

export const AppRouterOutlet = ({ rootPath, routes = [], ...rest }: OutLetProps) => {
  const PARSED_ROUTES = routes
    .map((r: IRouteConfig) => ({ ...r, path: (rootPath ? rootPath + '/' : '') + r.path }))
    .map((r: IRouteConfig) => ({ ...r, path: '/' + r.path.split(/\/?\//).join('/') }));

  return (
    <Suspense fallback={<p>Loading</p>}>
      <BrowserRouter>
        {PARSED_ROUTES.map((route, index) => <RenderedRoute {...rest} {...route} key={index} />)}
      </BrowserRouter>
    </Suspense>
  );
}