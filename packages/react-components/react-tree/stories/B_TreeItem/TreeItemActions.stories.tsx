import * as React from 'react';
import { Tree, TreeItem, TreeItemAside, TreeItemLayout } from '@fluentui/react-tree';
import { Edit20Regular, MoreHorizontal20Regular } from '@fluentui/react-icons';
import { Button, Menu, MenuItem, MenuList, MenuPopover, MenuTrigger } from '@fluentui/react-components';
import story from './TreeItemActions.md';

const ActionsExample = () => {
  return (
    <>
      <Button aria-label="Edit" appearance="subtle" icon={<Edit20Regular />} />
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <Button aria-label="More options" appearance="subtle" icon={<MoreHorizontal20Regular />} />
        </MenuTrigger>

        <MenuPopover>
          <MenuList>
            <MenuItem>New </MenuItem>
            <MenuItem>New Window</MenuItem>
            <MenuItem disabled>Open File</MenuItem>
            <MenuItem>Open Folder</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </>
  );
};

export const Actions = () => (
  <Tree aria-label="Tree">
    <TreeItem itemType="branch">
      <TreeItemLayout>level 1, item 1</TreeItemLayout>
      <TreeItemAside actions>
        <ActionsExample />
      </TreeItemAside>
      <Tree>
        <TreeItem itemType="leaf">
          <TreeItemLayout>level 2, item 1</TreeItemLayout>
          <TreeItemAside actions>
            <ActionsExample />
          </TreeItemAside>
        </TreeItem>
        <TreeItem itemType="leaf">
          <TreeItemLayout>level 2, item 2</TreeItemLayout>
          <TreeItemAside actions>
            <ActionsExample />
          </TreeItemAside>
        </TreeItem>
        <TreeItem itemType="leaf">
          <TreeItemLayout>level 2, item 3</TreeItemLayout>
          <TreeItemAside actions>
            <ActionsExample />
          </TreeItemAside>
        </TreeItem>
      </Tree>
    </TreeItem>
    <TreeItem itemType="branch">
      <TreeItemLayout>level 1, item 2</TreeItemLayout>
      <TreeItemAside actions>
        <ActionsExample />
      </TreeItemAside>
      <Tree>
        <TreeItem itemType="branch">
          <TreeItemLayout>level 2, item 1</TreeItemLayout>
          <TreeItemAside actions>
            <ActionsExample />
          </TreeItemAside>
          <Tree>
            <TreeItem itemType="leaf">
              <TreeItemLayout>level 3, item 1</TreeItemLayout>
              <TreeItemAside actions>
                <ActionsExample />
              </TreeItemAside>
            </TreeItem>
          </Tree>
        </TreeItem>

        <TreeItem itemType="branch">
          <TreeItemLayout>level 1, item 1</TreeItemLayout>
          <TreeItemAside actions>
            <ActionsExample />
          </TreeItemAside>
          <Tree>
            <TreeItem itemType="leaf">
              <TreeItemLayout>level 2, item 1</TreeItemLayout>
              <TreeItemAside actions>
                <ActionsExample />
              </TreeItemAside>
            </TreeItem>
            <TreeItem itemType="leaf">
              <TreeItemLayout>level 2, item 2</TreeItemLayout>
              <TreeItemAside actions>
                <ActionsExample />
              </TreeItemAside>
            </TreeItem>
            <TreeItem itemType="leaf">
              <TreeItemLayout>level 2, item 3</TreeItemLayout>
              <TreeItemAside actions>
                <ActionsExample />
              </TreeItemAside>
            </TreeItem>
          </Tree>
        </TreeItem>
      </Tree>
    </TreeItem>
  </Tree>
);

Actions.parameters = {
  docs: {
    description: {
      story,
    },
  },
};
