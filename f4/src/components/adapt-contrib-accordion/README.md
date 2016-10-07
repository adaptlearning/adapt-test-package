# adapt-contrib-accordion

<img src="https://github.com/adaptlearning/documentation/blob/master/04_wiki_assets/plug-ins/images/accordion01.gif" alt="accordion in action" align="right">  **Accordion** is a *presentation component* bundled with the [Adapt framework](https://github.com/adaptlearning/adapt_framework).

The component displays a vertically stacked list of headings. Each heading is associated with a collapsible content panel. Clicking a heading toggles the visibility of its content panel. Content panels may contain text and/or an image.

[Visit the **Accordion** wiki](https://github.com/adaptlearning/adapt-contrib-accordion/wiki) for more information about its functionality and for explanations of key properties.

##Installation

As one of Adapt's *[core components](https://github.com/adaptlearning/adapt_framework/wiki/Core-Plug-ins-in-the-Adapt-Learning-Framework#components),* **Accordion** is included with the [installation of the Adapt framework](https://github.com/adaptlearning/adapt_framework/wiki/Manual-installation-of-the-Adapt-framework#installation) and the [installation of the Adapt authoring tool](https://github.com/adaptlearning/adapt_authoring/wiki/Installing-Adapt-Origin).

* If **Accordion** has been uninstalled from the Adapt framework, it may be reinstalled.
With the [Adapt CLI](https://github.com/adaptlearning/adapt-cli) installed, run the following from the command line:
`adapt install adapt-contrib-accordion`

    Alternatively, this component can also be installed by adding the following line of code to the *adapt.json* file:
    `"adapt-contrib-accordion": "*"`
    Then running the command:
    `adapt install`
    (This second method will reinstall all plug-ins listed in *adapt.json*.)

* If **Accordion** has been uninstalled from the Adapt authoring tool, it may be reinstalled using the [Plug-in Manager](https://github.com/adaptlearning/adapt_authoring/wiki/Plugin-Manager).
<div float align=right><a href="#top">Back to Top</a></div>

## Settings Overview

The attributes listed below are used in *components.json* to configure **Accordion**, and are properly formatted as JSON in [*example.json*](https://github.com/adaptlearning/adapt-contrib-accordion/blob/master/example.json). Visit the [**Accordion** wiki](https://github.com/adaptlearning/adapt-contrib-accordion/wiki) for more information about how they appear in the [authoring tool](https://github.com/adaptlearning/adapt_authoring/wiki).

### Attributes

[**core model attributes**](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes): These are inherited by every Adapt component. [Read more](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes).

**_component** (string): This value must be: `accordion`.

**_classes** (string): CSS class name to be applied to **Accordion**’s containing div. The class must be predefined in one of the Less files. Separate multiple classes with a space. A predefined CSS class can be applied to an Accordion Item.

**_layout** (string): This defines the horizontal position of the component in the block. Acceptable values are `full`, `left` or `right`.

**instruction** (string): This optional text appears above the component. It is frequently used to
guide the learner’s interaction with the component.

**_items** (array): Multiple items may be created. Each _item_ represents one element of the accordion and contains values for **title**, **body**, and **_graphic**.

>**title** (string): This text is displayed as the element's header. It is displayed at all times, even when the **body** has been collapsed.

>**body** (string): This content will be displayed when the learner opens this accordion element. It may contain HTML.

>**_graphic** (object): An optional image which is displayed below the item body when the learner opens this accordion element. It contains values for **src** and **alt**.

>>**src** (string): File name (including path) of the image. Path should be relative to the *src* folder (e.g., *course/en/images/c-45-1.jpg*).

>>**alt** (string): This text becomes the image’s `alt` attribute.

>**_classes** (string): An optional class that will be applied to the Accordion Item.

**_shouldCollapseItems** (boolean): Used to control the auto-collapse of other expanded Accordion items whenever an item is clicked/expanded. Defaulted to 'true'

### Accessibility
**Accordion** has been assigned a label using the [aria-label](https://github.com/adaptlearning/adapt_framework/wiki/Aria-Labels) attribute: **ariaRegion**. This label is not a visible element. It is utilized by assistive technology such as screen readers. Should the region's text need to be customised, it can be found within the **globals** object in [*properties.schema*](https://github.com/adaptlearning/adapt-contrib-accordion/blob/master/properties.schema).
<div float align=right><a href="#top">Back to Top</a></div>


## Limitations

Body graphics are displayed only when `"layout": "full"`. On a mobile device, a fully spanned **Accordion** will be reduced to single-width. At this smaller size the graphic will not be displayed.


----------------------------

**Version number:**  2.0.5   <a href="https://community.adaptlearning.org/" target="_blank"><img src="https://github.com/adaptlearning/documentation/blob/master/04_wiki_assets/plug-ins/images/adapt-logo-mrgn-lft.jpg" alt="adapt learning logo" align="right"></a>
**Framework versions:** 2.0
**Author / maintainer:** Adapt Core Team
**Accessibility support:** WAI AA
**RTL support:** yes
**Cross-platform coverage:** Chrome, Chrome for Android, Firefox (ESR + latest version), Edge 12, IE 11, IE10, IE9, IE8, IE Mobile 11, Safari for iPhone (iOS 8+9), Safari for iPad (iOS 8+9), Safari 8, Opera
