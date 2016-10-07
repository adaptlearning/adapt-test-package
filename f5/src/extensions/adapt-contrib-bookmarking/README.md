# adapt-contrib-bookmarking  

**Bookmarking** is an *extension* bundled with the [Adapt framework](https://github.com/adaptlearning/adapt_framework).  

<img src="https://github.com/adaptlearning/documentation/blob/master/04_wiki_assets/plug-ins/images/bookmarking.gif" alt="bookmarking in action" width="598" height="516"/>

Upon returning to the course, a prompt inquires whether the learner would like to continue where they left off. If the learner selects "yes", the course navigates to the most recently visited structural element (page, block, or component), based on configuration. If the learner selects "no", the course remains at the top-level menu.

This prompt will not appear on first launch or if the user exits from the top-level menu.

[Visit the **Bookmarking** wiki](https://github.com/adaptlearning/adapt-contrib-bookmarking/wiki) for more information about its functionality and for explanations of key properties. 

##Installation

As one of Adapt's *[core extensions](https://github.com/adaptlearning/adapt_framework/wiki/Core-Plug-ins-in-the-Adapt-Learning-Framework#extensions),* **Bookmarking** is included with the [installation of the Adapt framework](https://github.com/adaptlearning/adapt_framework/wiki/Manual-installation-of-the-Adapt-framework#installation) and the [installation of the Adapt authoring tool](https://github.com/adaptlearning/adapt_authoring/wiki/Installing-Adapt-Origin).

* If **Bookmarking** has been uninstalled from the Adapt framework, it may be reinstalled.
With the [Adapt CLI](https://github.com/adaptlearning/adapt-cli) installed, run the following from the command line:  
`adapt install adapt-contrib-bookmarking`

    Alternatively, this component can also be installed by adding the following line of code to the *adapt.json* file:  
    `"adapt-contrib-bookmarking": "*"`  
    Then running the command:  
    `adapt install`  
    (This second method will reinstall all plug-ins listed in *adapt.json*.)  

* If **Bookmarking** has been uninstalled from the Adapt authoring tool, it may be reinstalled using the [Plug-in Manager](https://github.com/adaptlearning/adapt_authoring/wiki/Plugin-Manager).  
<div float align=right><a href="#top">Back to Top</a></div>

## Settings Overview

**Bookmarking** is configured with the attributes that follow. It is configured on two levels of the [content structure](https://github.com/adaptlearning/adapt_framework/wiki/Framework-in-five-minutes#content-structure): course (*course.json*) and contentObject (*contentObjects.json*). The attributes are so grouped below and are properly formatted as JSON in [*example.json*](https://github.com/adaptlearning/adapt-contrib-bookmarking/blob/master/example.json).

Visit the [**Bookmarking** wiki](https://github.com/adaptlearning/adapt-contrib-bookmarking/wiki) for more information about how they appear in the [authoring tool](https://github.com/adaptlearning/adapt_authoring/wiki). 

### Attributes

#### *course.json*  
The following attributes, set within *course.json*, configure the defaults for **Bookmarking**.  

**_bookmarking** (object): The bookmarking object that contains values for **_isEnabled**, **_level**, **title**, **body**, and **_buttons**.

>**_isEnabled** (boolean): Turns on and off the bookmarking extension. Acceptable values are `true` and `false`.

>**_level** (string): This value determines the type of view to which the learner is returned. Acceptable values are `"page"`, `"block"` or `"component"`. (The `_id` of the most recent view to trigger `inview` is used for routing.)

>**title** (string): Text that appears as the header of the prompt. 

>**body** (string): Text that inquires whether the learner would like to return to where they left off in their last visit. 

>**_buttons** (object):  The buttons attribute group retains the labels to be used on the "yes" and "no" buttons. It contains values for **yes** and **no**.  

>>**yes** (string): This text labels the button that returns the learner to the point of their last visit.

>>**no** (string): This text labels the button that cancels the jump. 

<div float align=right><a href="#top">Back to Top</a></div>

#### *contentObjects.json*  
The defaults set in *course.json* can be overridden for each contentObject of `"_type": "page"` by setting the following attributes in *contentObjects.json*.  

**_bookmarking** (object): The Bookmarking object that contains values for **_isEnabled** and **_level**.

>**_isEnabled** (boolean): Turns on and off the bookmarking extension. Acceptable values are `true` and `false`.

>**_level** (string): This value determines the type of view to which the learner is returned. Acceptable values are `"page"`, `"block"` or `"component"`. (The `_id` of the most recent view to trigger `inview` is used for routing.)  

<div float align=right><a href="#top">Back to Top</a></div>

## Limitations
 
**Bookmarking** only works if [**Spoor**](https://github.com/adaptlearning/adapt-contrib-spoor) is enabled and the course is being presented in a learning management system (LMS). 
>**Note:** **Bookmarking** will work without an LMS if run via scorm_test_harness as explained in https://github.com/adaptlearning/adapt-contrib-spoor#client-local-storage--fake-lms--adapt-lms-behaviour-testing. However, this is intended only for development, not for production.

----------------------------
**Version number:**  2.0.3   <a href="https://community.adaptlearning.org/" target="_blank"><img src="https://github.com/adaptlearning/documentation/blob/master/04_wiki_assets/plug-ins/images/adapt-logo-mrgn-lft.jpg" alt="adapt learning logo" align="right"></a> 
**Framework versions:**  2.0     
**Author / maintainer:** Adapt Core Team with [contributors](https://github.com/adaptlearning/adapt-contrib-bookmarking/graphs/contributors)    
**Accessibility support:** WAI AA   
**RTL support:** yes  
**Cross-platform coverage:** Chrome, Chrome for Android, Firefox (ESR + latest version), Edge 12, IE 11, IE10, IE9, IE8, IE Mobile 11, Safari for iPhone (iOS 8+9), Safari for iPad (iOS 8+9), Safari 8, Opera    
