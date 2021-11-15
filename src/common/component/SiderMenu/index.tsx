/**
 * @file Menu related
 */

import * as React from 'react'
import { Menu, MenuProps } from 'antd'

import { Link } from 'react-router-dom';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useEffect, useState } from 'react';
import { IMenuRoutes } from '../../routes/MenuRoutes/config';

const MenuItem = Menu.Item
type SiderMenuProps = MenuProps & {
  menus: any
  onClick: (e: any) => void
  selectedKeys: string[]
  openKeys?: string[]
  onOpenChange: (v: string[]) => void
}

const renderMenuItem = (item: IMenuRoutes) => (
  <MenuItem key={item.path}>
    <Link to={(item.route || item.path) + (item.query || '')}>
      <span className="nav-text">{item.title}</span>
    </Link>
  </MenuItem>
)

const renderSubMenu = (item: IMenuRoutes) => {
  return (
    <Menu.SubMenu
      key={item.path}
      title={
        <span>
          <span className="nav-text">{item.title}</span>
        </span>
      }
    >
      {item.subs!.map((sub) => (sub.subs ? renderSubMenu(sub) : renderMenuItem(sub)))}
    </Menu.SubMenu>
  )
}

const SiderMenu = ({ menus, ...props }: SiderMenuProps) => {
  const [dragItems, setDragItems] = useState<any>([])

  useEffect(() => {
    setDragItems(menus)
  }, [menus]);

  const reorder = (list: any, startIndex: number, endIndex: number) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
  }
  const onDragEnd = (result: any) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const _items = reorder(dragItems, result.source.index, result.destination.index);
    setDragItems(_items);
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {dragItems.map((item: IMenuRoutes, index: number) => (
              <Draggable key={item.path} draggableId={item.path} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    onDragStart={(e: React.DragEvent<any>) =>
                      provided.dragHandleProps &&
                      provided.dragHandleProps.onDragStart(e as any)
                    }
                  >
                    <Menu {...props}>
                      {item.subs! ? renderSubMenu(item) : renderMenuItem(item)}
                    </Menu>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
export default React.memo(SiderMenu)




