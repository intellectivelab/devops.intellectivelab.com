---
title: Dashboards Configuration
layout: docs
category: Unity 7
---
[Dashboard Component description](../components/dashboard.md)

# Dashboards tag

Example of dashboard configuration:

```xml
<Dashboard disableProviderLevelSecurity="false" default="false" iconCls="dashboard-cls" id="FolderSearch" lazy="true" title="Folder Search" tooltip="SharePoint Documents Search">
  <Container ui="tree">                    
    <Component ref="sharepoint_Search_productmanagement" title="Product Management Teamsite" type="searchTemplate">
      <Property name="resourceName" value="documents"/>
      <Property name="queryScope" value="sharepoint_repository_productmanagement"/>
      <Property name="folderPath" value="/productmanagement"/>
    </Component>
    <Component ref="sharepoint_Search_ConsultingServices_U4I" title="​Professional Services Teamsite - U4I" type="searchTemplate">
      <Property name="resourceName" value="documents"/>
      <Property name="queryScope" value="sharepoint_repository_ConsultingServices_U4I"/>
      <Property name="folderPath" value="/Consulting Services/Projects/internal/unity4intellective"/>
    </Component>
  </Container>
</Dashboard>
```

Dashboard configuration parameters:

| Parameter | Description |
|:----|:-------------------|
|id | Dashboard identifier |
|title | Dashboard title |
|iconCls | Icon definition |
|isDefault | *definition to be added* |
|isLazy | *definition to be added* |
|builder | *definition to be added* |
|filter | *definition to be added* |
|disableProviderLevelSecurity | The attribute allows to turn off security check on data provider level<sup>1</sup> when equals `true`. Default value: `false` |
|Security|[Dashboard security restrictions](../../unity-react/configuration/security.md#security-restrictions)|

<sup>1</sup> Provider level security check hides inner component if all conditions match:
- component is referenced to SharePoint search template
- component has `folderPath` parameter specified OR search template has `FolderPath` parameter specified
- user doesn't have permissions to access corresponding folder in repository data provider

[Container tag configuration](dashboards/container-tag.md)  
[Component tag configuration](dashboards/component-tag.md)
