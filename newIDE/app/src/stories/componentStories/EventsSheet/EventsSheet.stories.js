// @flow

import * as React from 'react';
import { action } from '@storybook/addon-actions';

import EventsSheet from '../../../EventsSheet';
import DragAndDropContextProvider from '../../../UI/DragAndDrop/DragAndDropContextProvider';
import FixedHeightFlexContainer from '../../FixedHeightFlexContainer';
import { testProject } from '../../GDevelopJsInitializerDecorator';
import fakeResourceManagementProps from '../../FakeResourceManagement';
import fakeHotReloadPreviewButtonProps from '../../FakeHotReloadPreviewButtonProps';

export default {
  title: 'EventsSheet/EventsSheet',
  component: EventsSheet,
};

export const DefaultNoScope = () => (
  <DragAndDropContextProvider>
    <FixedHeightFlexContainer height={500}>
      <EventsSheet
        project={testProject.project}
        scope={{ project: testProject.project, layout: testProject.testLayout }}
        globalObjectsContainer={testProject.project.getObjects()}
        objectsContainer={testProject.testLayout.getObjects()}
        projectScopedContainersAccessor={
          testProject.testSceneProjectScopedContainersAccessor
        }
        events={testProject.testLayout.getEvents()}
        onOpenExternalEvents={action('Open external events')}
        resourceManagementProps={fakeResourceManagementProps}
        onOpenLayout={action('open layout')}
        onOpenSettings={action('open settings')}
        setToolbar={() => {}}
        openInstructionOrExpression={action('open instruction or expression')}
        onCreateEventsFunction={action('create events function')}
        onBeginCreateEventsFunction={action('begin create events function')}
        isActive={true}
        hotReloadPreviewButtonProps={fakeHotReloadPreviewButtonProps}
        onExtensionInstalled={action('extension installed')}
      />
    </FixedHeightFlexContainer>
  </DragAndDropContextProvider>
);

export const EmptyNoScope = () => (
  <DragAndDropContextProvider>
    <FixedHeightFlexContainer height={500}>
      <EventsSheet
        project={testProject.project}
        scope={{
          project: testProject.project,
          layout: testProject.emptyLayout,
        }}
        globalObjectsContainer={testProject.project.getObjects()}
        objectsContainer={testProject.emptyLayout.getObjects()}
        projectScopedContainersAccessor={
          testProject.emptySceneProjectScopedContainersAccessor
        }
        events={testProject.emptyLayout.getEvents()}
        onOpenExternalEvents={action('Open external events')}
        resourceManagementProps={fakeResourceManagementProps}
        onOpenLayout={action('open layout')}
        onOpenSettings={action('open settings')}
        setToolbar={() => {}}
        openInstructionOrExpression={action('open instruction or expression')}
        onCreateEventsFunction={action('create events function')}
        onBeginCreateEventsFunction={action('begin create events function')}
        isActive={true}
        hotReloadPreviewButtonProps={fakeHotReloadPreviewButtonProps}
        onExtensionInstalled={action('extension installed')}
      />
    </FixedHeightFlexContainer>
  </DragAndDropContextProvider>
);
