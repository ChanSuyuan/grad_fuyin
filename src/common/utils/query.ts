import { cloneDeep } from 'lodash'

/**
 * In an array of objects, specify an object that traverses the objects whose parent ID matches.
 * @param   {array}     array     The Array need to Converted.
 * @param   {string}    current   Specify the object that needs to be queried.
 * @param   {string}    parentId  The alias of the parent ID of the object in the array.
 * @param   {string}    id        The alias of the unique ID of the object in the array.
 * @return  {array}    Return a key array.
 */
export function queryAncestors(array: any, current: any, parentId: any, id: string = 'id'): Array<any> {
  const result = [current]
  const hashMap = new Map()
  array.forEach((item: any) => hashMap.set(item[id], item))

  const getPath = (current: any) => {
    const currentParentId = hashMap.get(current[id])[parentId]
    if (currentParentId) {
      result.push(hashMap.get(currentParentId))
      getPath(hashMap.get(currentParentId))
    }
  }

  getPath(current)
  return result
}

/**
 * Convert an array to a tree-structured array.
 * @param   {array}     array     The Array need to Converted.
 * @param   {string}    id        The alias of the unique ID of the object in the array.
 * @param   {string}    parentId       The alias of the parent ID of the object in the array.
 * @param   {string}    children  The alias of children of the object in the array.
 * @return  {array}    Return a tree-structured array.
 */
export function arrayToTree(
  array: Array<any>,
  id: string = 'id',
  parentId: string = 'pid',
  children: string = 'children'
): Array<any> {
  const result: any = []
  const hash: any = {}
  const data: any = cloneDeep(array)

  data.forEach((item: any, index: any) => {
    hash[data[index][id]] = data[index]
  })

  data.forEach((item: any) => {
    const hashParent = hash[item[parentId]]
    if (hashParent) {
      !hashParent[children] && (hashParent[children] = [])
      hashParent[children].push(item)
    } else {
      result.push(item)
    }
  })
  return result
}