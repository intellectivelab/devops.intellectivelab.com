---
title: Unity 7 User Guide
layout: docs
category: Unity 7
---

# Introduction

You can search for documents, case, and work items using React UI interface. React UI Interface supports IBM FileNet, CMOD, CM8, SharePoint, Box, Alfresco, other CMIS repositories. All Unity actions are supported in the React UI grid.

## Dashboards

Dashboard container component serves as a container for UI components and as away of grouping components.

On `React UI` application open `Analytics UI` tab, expand sidebar and discover available dashboards:

[![Dashboards](unity-7.8-user-guide/images/dashboards.png)](unity-7.8-user-guide/images/dashboards.png)

### Containers

Dashboard containers organize and allow navigation between dashboard components that are related and at the same level of hierarchy. The following types of containers are supported out of the box:

- `Tabs` container allows to switch between components from the Tabs bar:

  [![Containers](unity-7.8-user-guide/images/dashboard_container_tabs.png)](unity-7.8-user-guide/images/dashboard_container_tabs.png)

- `Toggle` container allows to switch between components from the Toggle Button group:

  [![Containers](unity-7.8-user-guide/images/dashboard_container_toggle.png)](unity-7.8-user-guide/images/dashboard_container_toggle.png)

- `Dropdown` container allows to switch between components from the Dropdown menu:

  [![Containers](unity-7.8-user-guide/images/dashboard_container_dropdown.png)](unity-7.8-user-guide/images/dashboard_container_dropdown.png)

- `Tree` container allows to switch between components from the Tree view:

  [![Containers](unity-7.8-user-guide/images/dashboard_container_tree.png)](unity-7.8-user-guide/images/dashboard_container_tree.png)

## Folder view

Use the `folderPath` parameter to easily browse through the contents of different folders within repository.

Unity has the capability to present a single continuous view of multiple repositories and related folders like IBM FileNet, CMOD, CM8, SharePoint, Box, Alfresco, other CMIS repositories, and more.

Click on a folder to display content within that folder and all subfolders under it:

[![Folders](unity-7.8-user-guide/images/folders.png)](unity-7.8-user-guide/images/folders.png)

## Quick Search

Use Quick Search to quickly find documents across current repository by typing in a related keyword or phrase.

Type in the word or phrase to search for in the `Contains text` box at the top of the screen. The search executes automatically.

The Search results will update, returning all content with the search criteria found anywhere and restricted by your selected repository:

[![Quick Search](unity-7.8-user-guide/images/quick-search.png)](unity-7.8-user-guide/images/quick-search.png)

## Advanced Search

Advanced search gives you powerful tools to find the exact document you’re looking for.
You can quickly filter and narrow down your search results via multiple dimensions document title, modifier, custom metadata, and more.

Click the Advanced Search Icon to open the Advanced Search Panel:

[![Advanced Search](unity-7.8-user-guide/images/advanced-search-icon.png)](unity-7.8-user-guide/images/advanced-search-icon.png)

Advanced Search panel appears and you can enter search criteria based on the repository you selected:

[![Advanced Search](unity-7.8-user-guide/images/advanced-search-panel.png)](unity-7.8-user-guide/images/advanced-search-panel.png)

### Execute Search and Reset

- Specify search criteria, and the results will be shown in the panel on the right:

    [![Execute Search and Reset](unity-7.8-user-guide/images/advanced-search-criteria.gif)](unity-7.8-user-guide/images/advanced-search-criteria.gif)

- To clear your Advanced Search changes and return to the Quick search settings, click the `Reset filters` button:

    [![Execure Search and Reset](unity-7.8-user-guide/images/reset-filters.png)](unity-7.8-user-guide/images/reset-filters.png)

## Saved Searches

You can save frequently used searches to quickly access them in the future.

- Enter the search criteria you’d like to use, then click the `Manage Selected Filters`:

    [![Saved Search](unity-7.8-user-guide/images/saved-search-menu.png)](unity-7.8-user-guide/images/saved-search-menu.png)

- On the opened modal window enter a name for the search and click `Save As`:

    [![Saved Search](unity-7.8-user-guide/images/save-search.png)](unity-7.8-user-guide/images/save-search.png)

- To access your saved searches, click on the filter icon and select a search on opened `Choose a search` window:

    [![Saved Search](unity-7.8-user-guide/images/choose-saved-search.png)](unity-7.8-user-guide/images/choose-saved-search.png)

When a Saved Search is selected, the Advanced panel UI is updated to display the Saved Search Criteria, and the search is executed.

## Search Results

With Unity, you can customize how you view your search results. You can change the look and feel, set and order of displayed columns, sort order, and more. 
To customize the Search Results Panel, click on the gear icon in the upper right:

[![Grid settings](unity-8-user-guide/images/grid-settings-menu.png)](unity-8-user-guide/images/grid-settings-menu.png)

### Grid mode

For loading data, Grid supports pagination and infinite scrolling. The selected method is defined in the Grid configuration.

- In pagination mode, user may view the grid data by pages, clicking pages in pagination control under the grid. The number of items is restricted by 10 items per page

    [![Grid mode](unity-7.8-user-guide/images/grid-pagination-mode.png)](unity-7.8-user-guide/images/grid-pagination-mode.png)

- In infinite scrolling mode, user may load next portion of data into the grid simply by scrolling grid down, until no more data is available.

    [![Grid mode](unity-7.8-user-guide/images/grid-infinite-mode.png)](unity-7.8-user-guide/images/grid-infinite-mode.png)

### Grid columns

To make a column visible or hidden, or to control the order in which the columns are displayed, select the `Grid Columns` menu item.
Customize columns dialog appears:

[![Grid columns](unity-7.8-user-guide/images/customize-columns.png)](unity-7.8-user-guide/images/customize-columns.png)

For a given field, toggle the Visible toggle switch to the right (Red) to make that column visible. Toggle the switch to the left (Gray) to hide the column.

Any custom fields configured to the Repository will be displayed as columns.

To change the column order, mouse over the Dots icon to the left of the Column name, and then drag and drop the Column in the order it should be displayed.
For example, drag a column from the bottom to the top of the list to see it on the left side of your screen when searching.

When you’re done making changes, select the `Apply` button. Your changes will be saved and kept the same each time you log into the system.

### Column Resizing Grid

Normally grid columns width is set automatically in order to fill whole grid horizontal space. The columns may be resized by mouse by dragging column separators. To show the separators, move mouse over the column heading and left and right side separators will be shown. Hold a separator with mouse and move horizontally to resize the column.

[![Grid columns](unity-7.8-user-guide/images/resize-columns.png)](unity-7.8-user-guide/images/resize-columns.png)

Last column width may not be changed. If grid occupies whole container form width, the last column takes all the remaining width till the right side of the grid. However, if grid is wider than its container, the last column width is set automatically by actual content.

The minimum size of the columns is determined by column header, the actual column data in the grid rows may be shortened when shown in too narrow columns.

Width of a column becomes fixed once it was resized. Other columns width remains automatically maintained. To reset the columns width to default (and revert the visible state of the columns and their order) use `Reset` from the grid settings menu:

[![Grid columns resizing](unity-7.8-user-guide/images/grid-reset.png)](unity-7.8-user-guide/images/grid-reset.png)

### Grid Display Density: Usability Features

Unity can show information in a more compact or a more expanded form, depending on how much data you’d like to see on the screen at once.

To change the grid density of the rows displayed in the search results, click the `Grid Display Density` option and select the view you’d like to use.  
Three options are provided:

- Default
- Medium
- Compact

Click the `Apply` button to save your change:

[![Grid density](unity-7.8-user-guide/images/grid-density.gif)](unity-7.8-user-guide/images/grid-density.gif)

### Sorting

Unity gives you powerful tools to sort your results, making it much easier to narrow down and identify the documents you want to find.
You can use a simple sort on one column, or create multiple related column sorts to hone in on specific information.

#### Quick Sort

- To quickly sort a column, mouse over the Column Name, and click on the arrow icon that appears immediately to the right:

  [![Quick Sort](unity-7.8-user-guide/images/column-sort-order-icon.png)](unity-7.8-user-guide/images/column-sort-order-icon.png)

  This will sort the column in ascending order.

- Click again to sort in descending order
- Click a third time to remove the sort

#### Sort Menu

To sort a column, you can also click the down arrow to the right of the column heading:

[![Sort Menu](unity-7.8-user-guide/images/sort-column-arrow.png)](unity-7.8-user-guide/images/sort-column-arrow.png)

The sort options are displayed:

[![Sort Menu](unity-7.8-user-guide/images/sort-column-menu.png)](unity-7.8-user-guide/images/sort-column-menu.png)

To set the sort order for the selected column, select either `Sort Ascending` or `Sort Descending`. Ascending will order elements like `1, 2, Alpha, Beta`, while descending will order elements like `9, 8, Zulu, Yankee`.

If you select a sort for multiple columns, a number will appear after the column names, indicating in which order the columns are sorted.

To control the sort order and have a different column be sorted first, select the down arrow to the right of the column heading and select either Promote Order (to increase that column’s precedence in the sort order) ,or Demote Order (to lower that column’s precedence in the sort order).
For example, if you want to sort by Document Title first, and then by Date Modified, promote Document Title until it is labelled `1`, followed by Date Modified labelled `2`.

[![Sort Menu](unity-7.8-user-guide/images/multiple-sorting.gif)](unity-7.8-user-guide/images/multiple-sorting.gif)

To remove the Column from Sort, select the `Remove Sort` menu item from the dropdown.

## Actions on documents

Once you’ve located the document you’re looking for, you can take a variety of actions on it.

### Actions menu

For more actions, select the document and click on the vertical ellipse icon consisting of three dots to the right of the name:

[![Actions Menu](unity-7.8-user-guide/images/actions-menu.gif)](unity-7.8-user-guide/images/actions-menu.gif)

Click on the action to perform it.

#### View Content

The application opens the file in a separate tab.

#### Download

Downloads the selected file to your default file download location.

#### Check Out

The system lets you mark the file as checked out to prevent other users from making changes to the file while you work on it.

#### Check In

The system lets you select a file to add as the new version for the file and update any document properties

#### Cancel Check Out

The system removes the Checked Out status without making any changes to the file's version.

#### Delete

Deletes a document from the system.

You must have security rights to delete the file for this action to be available.

You will be shown a Delete document confirmation prompt:

- If you select `Yes`, the file will be deleted
- If you select `Cancel`, no changes will be made and the prompt will be closed

#### Check Out and Open In office

Opens the file in the related desktop application.  
Only applicable for Microsoft Office documents.

#### Move to Folder

Moves the file to another folder.

You may move files by dragging and dropping them, or by selecting the `Move to` option.

- Using `Move to Folder`

  Click the `Move to Folder` action, then select the folder you wish to move to. Click the `Select` button to move the document:

  [![Move to action](unity-7.8-user-guide/images/move-to.png)](unity-7.8-user-guide/images/move-to.png)

- Using Drag and Drop

  - Click on the file you want to move, then drag and drop the file from the Search Results to a Repository Folder on the Folder View.
  - After dropping the file, you will be asked if you’d like to move or copy the file. Moving will relocate the file to a new location, while copying will duplicate the document and place the copy in the new location:

  - To cancel the Move/Copy action, click outside of the selection box.

#### Copy to Folder

Copies the File to another Folder.

You may copy files by dragging and dropping them, or by selecting the `Copy to Folder` action.

- Using `Copy to Folder`

  Click the `Copy to Folder` action, then select the folder you wish to copy it to. Click the `Select` button to copy the document:

  [![Copy to action](unity-7.8-user-guide/images/copy-to.png)](unity-7.8-user-guide/images/copy-to.png)

#### Open in Separate tab

Ability to view case/document details in a separate browser tab.

#### Edit

Clicking the Edit action displays a Document Details window with the following information:

- Document title
- Link to Open the file in your browser:

  [![Link to open file](unity-7.8-user-guide/images/DetailsLink.gif)](unity-7.8-user-guide/images/DetailsLink.gif)

- Icon to Download the file:
  [![Icon to download file](unity-7.8-user-guide/images/DetailsDownload.gif)](unity-7.8-user-guide/images/DetailsDownload.gif)
- Icon to Open the file in desktop app:

  [![Icon to open in app](unity-7.8-user-guide/images/DetailsOpenInApp.gif)](unity-7.8-user-guide/images/DetailsOpenInApp.gif)

- `Document Properties` Tab
  The Details tab displays metadata, which can be modified by an authorized user.
  The Details Tab will be displayed by default.

- `VERSIONS` Tab

  The Version History tab displays information on each version of the file.

### Actions on Multiple Selected Documents

With Unity, you can take action on multiple documents at once.  
Click the checkbox to the left of a document to select it. To take action on multiple documents, select multiple documents and then click the `Actions` button in the upper right:

[![Multiple actions](unity-7.8-user-guide/images/MultipleActions.gif)](unity-7.8-user-guide/images/MultipleActions.gif)

You may take the following actions on multiple selected documents:

- Move to / Copy to
  Shows the same `Move to / Copy to` interface used for single documents, allowing you to copy or move multiple documents at the same time.

By clicking the `Export` button you can export metadata fields for selected documents to CSV file:

[![Export](unity-7.8-user-guide/images/Export.gif)](unity-7.8-user-guide/images/Export.gif)

You may select `CSV(current fields)` option to export fields that are currently shown in grid , or `CSV(all fields)` option to export all fields.

### Create Document

You can easily add new documents to your repositories.

Click the `Create` button to add a file to a Folder:

[![Create button](unity-7.8-user-guide/images/CreateButton.png)](unity-7.8-user-guide/images/CreateButton.png)

The New Document dialog box will be displayed:

[![New document dialog](unity-7.8-user-guide/images/NewDocumentDialog.png)](unity-7.8-user-guide/images/NewDocumentDialog.png)

You can add documents two ways:

- Drag and Drop: Click on a document in a folder on your desktop, and drag it onto the `Drop files to attach` box on the screen.
- Browse and Select: Click the Upload icon in the `Drop files to attach` box. You will be prompted to select.

After dragging and dropping, or browse and selecting a file, you will be prompted to enter metadata for the file.

- Enter a Document Title to be used for the document added. This can be different from the filename:
  [![New document dialog filled](unity-7.8-user-guide/images/Create.png)](unity-7.8-user-guide/images/Create.png)
- You may optionally provide custom metadata field values, if prompted. Required fields will be marked with a red icon.
- Once all required fields are entered, click the `Create` button.
- Your document will be securely uploaded into the system.

## Detail View

Unity provides an additional Detail View to allow fast browsing and comparison of documents. To activate it, click the `Detail View` toggle button in the upper right of the search results screen:

[![Detail view icon](unity-7.8-user-guide/images/DetailViewIcon.png)](unity-7.8-user-guide/images/DetailViewIcon.png)

You can click the button again to easily toggle between `Detail View` and standard `List View`:

[![Detail view](unity-7.8-user-guide/images/DetailView.png)](unity-7.8-user-guide/images/DetailView.png)

The Detail View left panel displays the list of files returned from the search.
The Detail middle panel displays the same details information as listed above when the user selects the `Details action`.
You may click on documents in the left panel to refresh the middle panel with their details. In this way, you can quickly switch between documents to compare details or identify the document you’re looking for.

You can open Detail View for all documents returned by a search, or you can first multi-select the specific documents you want to view.
For example, clicking the checkbox next to three documents, then selecting the Detail View toggle, will show only those three documents in Detail View. If no checkboxes are selected, all documents will be shown.

### Bookmarks

On Detail view Bookmarks functionality is available. Bookmarks allow to quickly switch between selected items. List item can be added to Bookmarks bar by clicking Bookmark action in the item actions menu.

[![Bookmarks](unity-7.8-user-guide/images/AddBookmark.png)](unity-7.8-user-guide/images/AddBookmark.png)

A bookmark can also be removed from the Bookmarks bar:

[![Bookmarks](unity-7.8-user-guide/images/DeleteBookmark.png)](unity-7.8-user-guide/images/DeleteBookmark.png)

## Recent View history

Recent view history saves and shows a list of links to recently viewed items.
To view the item in the Recent View history you may click the item in the grid and choose item properties. To open a list or Recently viewed items click the `History` icon.

[![Recent View icon](unity-7.8-user-guide/images/RecentlyViewedIcon.png)](unity-7.8-user-guide/images/RecentlyViewedIcon.png)

And see the list of `Recently viewed` items

[![Recent View list](unity-7.8-user-guide/images/ResentlyViewedList.png)](unity-7.8-user-guide/images/ResentlyViewedList.png)

To clear recent view history open it and click the `Clear history` icon:

[![Clear Recent View list](unity-7.8-user-guide/images/ClearRecentlyViewed.png)](unity-7.8-user-guide/images/ClearRecentlyViewed.png)

## Actions on cases

Once you’ve located the case you’re looking for, you can take a variety of actions on it.

### Create a new Case

You can easily create a new Cae.

Click the button with case type name or `Create` button (it's defined in the Unity cofniguration files):
[![Create New Case](unity-7.8-user-guide/images/create_new_case_button.png)](unity-7.8-user-guide/images/create_new_case_button.png)

The following view is displayed
[![Create New Case View](unity-7.8-user-guide/images/new_case_view.png)](unity-7.8-user-guide/images/new_case_view.png)

User should fill in all required field and press `Create` button
[![Create New Case Step 1](unity-7.8-user-guide/images/new_case_view_step1.png)](unity-7.8-user-guide/images/new_case_view_step1.png)

In the next step user can change properties or return to the back. User can Complete case creation pressing to `Complete` button
[![Create New Case Step 2](unity-7.8-user-guide/images/new_case_view_step2.png)](unity-7.8-user-guide/images/new_case_view_step2.png)

View for attaching different documents are displayed after `Next` button pressing
[![Create New Case Documents attaching](unity-7.8-user-guide/images/new_case_document_attaching.png)](unity-7.8-user-guide/images/new_case_document_attaching.png)

User can attach already existing document or create a new one for different Document Classes with attaching to the case
[![Create New Case Context menu for  Documents attaching](unity-7.8-user-guide/images/context_menu_for_documents_attaching.png)](unity-7.8-user-guide/images/context_menu_for_documents_attaching.png)

User can `Complete` case creation or return to the `Back` for properties changing
[![Complete Case Creation](unity-7.8-user-guide/images/complete_case_creation.png)](unity-7.8-user-guide/images/complete_case_creation.png).

#### Attach existing document
Search template is opened after `Attach existing document` selection (see [Quick Search](#quick-search), [Advanced Search](#advanced-search), [Execute Search and Reset](#execute-search-and-reset))
[![Attach existing document](unity-7.8-user-guide/images/attach_existing_document.png)](unity-7.8-user-guide/images/attach_existing_document.png)

User should select document(s) for attaching and press `Attach` button
Attached document(s) are displayed in the grid
[![List of Attached Document](unity-7.8-user-guide/images/list_attached_documents.png)](unity-7.8-user-guide/images/list_attached_documents.png)

Actions can be executed for any selected attached document as it described in [Actions on documents](#actions-on-documents). Specific document action is supported for attached document - `Detach Document`. Dialog confirmation is displayed after `Detach Document` action selection
[![Detach Document](unity-7.8-user-guide/images/detach_document.png)](unity-7.8-user-guide/images/detach_document.png).

Document is disappear from list of attached documents after document detaching

#### Attach a new document
View for document creation is displayed after action for new document attaching selection, see [Create Document](#create-document) section

### Actions menu

For more actions, select the case and click on the vertical ellipse icon consisting of three dots to the right of the name:

[![Actions Menu](unity-7.8-user-guide/images/cases_context_menu.png)](unity-7.8-user-guide/images/cases_context_menu.png)

Click on the action to perform it.

#### Case Details (Properties)
Case Details view can contain the following tabs:
- Properties
- Attached documents
- History/Comments
- Workitems

##### Properties
Properties tab contains fields that were configured in the Unity configuration files. Properties can be groupd to the expandable sections. Save button will be enabled after any property changing.
[![Case Properties](unity-7.8-user-guide/images/case_details.png)](unity-7.8-user-guide/images/case_details.png)

##### Attached document
Contains the same functional that was described in [Attach existing document](#attach-existing-document) and [Attach a new document](#attach-a-new-document) sections.

##### History/Comments
History/Comments tab contains information about all users actions and user comments
[![History](unity-7.8-user-guide/images/history.png)](unity-7.8-user-guide/images/history.png)

Only user comments can be displayed
[![User Comments Displaying](unity-7.8-user-guide/images/user_comments_displaying.png)](unity-7.8-user-guide/images/user_comments_displaying.png)

Also hisotry/comments can be displayed as timeline
[![History timeline](unity-7.8-user-guide/images/comments_timeline.png)](unity-7.8-user-guide/images/comments_timeline.png)

All history/comments can be filtered using quick search or range, see [Quick Search](#quick-search) section
[![History filtering](unity-7.8-user-guide/images/history_filtering.png)](unity-7.8-user-guide/images/history_filtering.png)

User can create comment pressing to `Comment` button
[![History filtering](unity-7.8-user-guide/images/history_filtering.png)](unity-7.8-user-guide/images/history_filtering.png)

A new comment is displayed in the grid after `Add` button pressing
Also user can change any user comment clicking on pencil icon
[![Comment Changing](unity-7.8-user-guide/images/comment_changing.png)](unity-7.8-user-guide/images/comment_changing.png)

##### Workitems
Workitems tab contains list of all workitems that were created for the case. Workitems can be filtered using [Quick Search](#quick-search) or [Advanced Search](#advanced-search)
[![Workitems](unity-7.8-user-guide/images/workitems.png)](unity-7.8-user-guide/images/workitems.png)

#### Split Case
User can split case using appropriate action. The following view is displayed after `Split Case` action selection from the context menu
[![Split Case Step1](unity-7.8-user-guide/images/case_type_selection_for_split_case.png)](unity-7.8-user-guide/images/case_type_selection_for_split_case.png).

Properties from the parent case is copied to the child case (if it was configured in the Unity configuration files) and displayed in the ReadOnly format. User should select Case Type for creation from menu for Next butto.

After Case Type selection user can change or add values to properties on the Case View
[![Split Case Properties](unity-7.8-user-guide/images/split_case_properties.png)](unity-7.8-user-guide/images/split_case_properties.png).

After properties changing user can select `Back` to change Case Type or `Next` to validate properties values.
[![Split Case Review Properties](unity-7.8-user-guide/images/split_case_review_properties.png)](unity-7.8-user-guide/images/split_case_review_properties.png).

User can select `Back` to return back to change Case Type or properties, change any values and press `Save`, press `Complete` to finishe case splitting, press `Next` to select document for attaching to a new case from the list of documents that were attached to the parent case
[![Split Case Documents attaching](unity-7.8-user-guide/images/split_case_documents_attaching.png)](unity-7.8-user-guide/images/split_case_documents_attaching.png).

User should select document(s) and press `Attach` button to attach documents to the new case. After that user should press `Complete` to finish case creation.
Created case will be displayed in the grid. Case Details view contains all filled in values and attached documents.

#### Copy Case
User can copy existing case and create a new case.
The following view is displayed for case copying. This view contains values from the parent case (if it was configured in the Unity configuration files)
[![Copy Case](unity-7.8-user-guide/images/copy_case.png)](unity-7.8-user-guide/images/copy_case.png).

User can change or add values to properties and press `Copy` button.
After that user can select `Back` to return back to change any values and press `Save`, press `Complete` to finishe case copying, press `Next` to select document for attaching to a new case from the list of documents that were attached to the parent case.
[![Copy Case Documents attaching](unity-7.8-user-guide/images/copy_case_documents_attaching.png)](unity-7.8-user-guide/images/copy_case_documents_attaching.png).

User should select document(s) and press `Attach` button to attach documents to the new case. After that user should press `Complete` to finish case creation.
Created case will be displayed in the grid. Case Details view contains all filled in values and attached documents.

#### Open by URL
Case Details view will be displayed in the separater browser tab in ExtJS mode after `Open by URL` action execution.
[![Open by URL](unity-7.8-user-guide/images/open_by_url.png)](unity-7.8-user-guide/images/open_by_url.png).

#### Open in Separate tab
Case Details view will be displayed in the separate browser tab in the React after `Open in Separate tab` action execution.
[![Open in Separate tab](unity-7.8-user-guide/images/open_in_separate_tab.png)](unity-7.8-user-guide/images/open_in_separate_tab.png)

#### Close Case
Case can be close and case status will be Complete after `Close Case` action execution. All workitems also are completed. Application can be configured for hiding cases and workitems with Complete status.

#### Delete Case
Any case can be deleted after `Delete Case` action execution.
Confirmation dialog is displyaed after action selection.
[![Delete Case](unity-7.8-user-guide/images/delete_case_dialog.png)](unity-7.8-user-guide/images/delete_case_dialog.png)

Case is physically deleted from case management system.
#Workitems
## View list of workitems
Open Inbaskets dashboard and list of workitems display
[![Workitems](unity-7.8-user-guide/images/WI_page.png)](unity-7.8-user-guide/images/WI_page.png)

### Actions menu

For more actions, select the workitem and click on the vertical ellipse icon consisting of three dots to the right of the name:
[![Workitems](unity-7.8-user-guide/images/actions-menu.gif)](unity-7.8-user-guide/images/actions-menu.gif)
Click on the action to perform it.

#### Properties
The application opens in the  detail view
##### Workitem Details (Properties)
Workitem Details view can contain the following tabs:
- Name Properties (depend on task in CaseBuilder)
- Attached documents (see more details  [Attach existing document](#attach-existing-document) and [Attach a new document](#attach-a-new-document) sections.
- History/Comments (see more details [History/Comments](#History/Comments) section)

#### Reassign 
User can reassign single or bulk of workitems on time via context menu or via the top Action button in the top corner.
One user reassigned to another user, then after the action this work item disappears from the list for first user (who resigned)and only the user to whom 
it was assigned can be seen.

[![Workitems](unity-7.8-user-guide/images/reassign.gif)](unity-7.8-user-guide/images/reassign.gif)

[![Workitems](unity-7.8-user-guide/images/reassign-bulk.gif)](unity-7.8-user-guide/images/reassign-bulk.gif)

#### Lock/Unlock workitem
User can lock/unlock workitem status 

#### Open in separate tab 
Ability to view workitem details in a separate browser tab.

**Note**: There are other actions that are configured on task in CaseBuilder and  defined in the Unity cofniguration files. Actions display in context menu and on the workitem detail view
[![Workitems](unity-7.8-user-guide/images/extra_actions.png)](unity-7.8-user-guide/images/extra_actions.png)
[![Workitems](unity-7.8-user-guide/images/extra_actions_detail.png)](unity-7.8-user-guide/images/extra_actions_detail.png)










