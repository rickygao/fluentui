import { FlatTreeItemProps } from '../hooks/useFlatTree';
import { TreeItemProps } from '../TreeItem';

export type NestedTreeItem<Props extends TreeItemProps<unknown>> = Omit<Props, 'subtree' | 'itemType'> & {
  subtree?: NestedTreeItem<Props>[];
};

export type FlattenedTreeItem<Props extends TreeItemProps<unknown>> = FlatTreeItemProps<NonNullable<Props['value']>> &
  Props;

let count = 1;
function flattenTreeRecursive<Props extends TreeItemProps<unknown>>(
  items: NestedTreeItem<Props>[],
  parent?: FlatTreeItemProps<Props['value']> & Props,
  level = 1,
): FlattenedTreeItem<Props>[] {
  return items.reduce<FlattenedTreeItem<Props>[]>((acc, { subtree, ...item }, index) => {
    const id = item.id ?? `fui-FlatTreeItem-${count++}`;
    const flatTreeItem = {
      'aria-level': level,
      'aria-posinset': index + 1,
      'aria-setsize': items.length,
      parentValue: parent?.value,
      value: item.value ?? (id as unknown as Props['value']),
      ...item,
    } as FlattenedTreeItem<Props>;
    acc.push(flatTreeItem);
    if (subtree !== undefined) {
      acc.push(...flattenTreeRecursive<Props>(subtree, flatTreeItem, level + 1));
    }
    return acc;
  }, []);
}

/**
 * Converts a nested structure to a flat one which can be consumed by `useFlatTreeItems`
 * @example
 * ```tsx
 * const defaultItems = flattenTree_unstable([
 *  {
 *    children: <TreeItemLayout>level 1, item 1</TreeItemLayout>,
 *    subtree: [
 *      {
 *        children: <TreeItemLayout>level 2, item 1</TreeItemLayout>,
 *      },
 *      {
 *        children: <TreeItemLayout>level 2, item 2</TreeItemLayout>,
 *      },
 *      {
 *        children: <TreeItemLayout>level 2, item 3</TreeItemLayout>,
 *      },
 *    ],
 *  },
 *  {
 *    children: <TreeItemLayout>level 1, item 2</TreeItemLayout>,
 *    subtree: [
 *      {
 *        children: <TreeItemLayout>level 2, item 1</TreeItemLayout>,
 *        subtree: [
 *          {
 *            children: <TreeItemLayout>level 3, item 1</TreeItemLayout>,
 *            subtree: [
 *              {
 *                children: <TreeItemLayout>level 4, item 1</TreeItemLayout>,
 *              },
 *            ],
 *          },
 *        ],
 *      },
 *    ],
 *  },
 * ]);
 * ```
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const flattenTree_unstable = <Props extends TreeItemProps<unknown>>(
  items: NestedTreeItem<Props>[],
): FlattenedTreeItem<Props>[] => flattenTreeRecursive(items);
