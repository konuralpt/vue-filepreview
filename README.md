# vue-filepreview

## Installation
```bash
npm i vue-filepreview
```


## Description

This is a component prepared for VueJS to show file extentions' previews as icons. Here is how it looks like:

<img src="https://i.ibb.co/pbX1Yq3/example.png" height="230">

Here are the file extentions that you can use for "file_type property":

```
3ds , ai , asp , avi , bin , com , css , csv , dbf , dll , doc , docc , dwg , eml , eps , exe , fla , gif , 
htm , ico , ini , iso , jar , jpg , js , mkv , mov , mp3 , mp4 , nfo , obj , otf , pdf , pkg , pngg , ppt , 
psd , rar , rtf , svg , text , tff , txt , unknown , vcf , wav , wmv , xls , xml , zip
```


## Usage
```js
import 'vue-filepreview'
```

```Vue
<FilePreview height="100" file_type="pdf" title="foo" />
```

## Properties
| Name | Type | Description |
| --- | --- | --- |
| file_type | String | extension of your file | 
| height | String | component height (will keep aspect ratio) | 
| title | String | title that you want to show for your file | 
