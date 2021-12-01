export interface CustomIconComponentProps {
  width: string | number;
  height: string | number;
  fill: string;
  viewBox?: string;
  className?: string;
  style?: React.CSSProperties;
  spin?: boolean;
  rotate?: number;
  ['aria-hidden']?: React.AriaAttributes['aria-hidden'];
}

export declare type ThemeType = 'filled' | 'outlined' | 'twoTone';

export interface IconProps {
  tabIndex?: number;
  type?: string;
  className?: string;
  theme?: ThemeType;
  title?: string;
  onKeyUp?: React.KeyboardEventHandler<HTMLElement>;
  onClick?: React.MouseEventHandler<HTMLElement>;
  component?: React.ComponentType<CustomIconComponentProps>;
  twoToneColor?: string;
  viewBox?: string;
  spin?: boolean;
  rotate?: number;
  style?: React.CSSProperties;
  prefixCls?: string;
  role?: string;
}

export interface IContextMenuAction<T> {
  key: string
  title: string | React.ReactElement

  // toLink 存在的情况下，判定为链接模式，会忽略 onselect
  toLink?: string
  onSelect?: (context: T) => void

  disabled?: IDisabledInfo // 是否禁用
  hidden?: boolean // 是否隐藏
  tooltip?: string // 提示，可用于解释按钮作用或者 禁用情况下的禁用说明
}

export interface IContextMenuGroup<T> {
  key: string
  title: string | React.ReactElement
  icon?: IconProps
  actions: IContextMenuAction<T>[]
}

export interface IActionContextMenuProps<T> {
  context: T
  expand?: boolean // 是否为展开模式，展开模式下没有 dropdown，不支持传入 groups
  actions?: IContextMenuAction<T>[] // 默认分组下的 action，不会收缩到 group 里
  groups?: IContextMenuGroup<T>[] // action 分组
}

export interface IDisabledInfo {
  disabled: boolean
  disabledMsg: string
}