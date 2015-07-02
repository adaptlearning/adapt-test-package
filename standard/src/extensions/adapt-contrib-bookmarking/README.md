adapt-contrib-bookmarking
=========================

Allows returning users to be either taken to the menu or their last location when returning to the learning in a new session.

## Configuration

The main settings are applied to the `course.json` file. From here you set the default values for the course. For example:

    "_bookmarking": {
        "_isEnabled": true,
        "_level": "block",
        "title": "Bookmarking",
        "body": "Would you like to continue where you left off?",
        "_buttons": {
            "yes": "Yes",
            "no": "No"
        }
    }

A description of the attributes is as follows:

| Attribute        | Type| Description|
| :------------ |:-------------|:-----|
| _isEnabled  | Boolean   | Set to true to switch bookmarking on
| _level  | String   | The type of view to return a user to. The possible values are "page", "block" or "component". The "_id" of the most recent view to trigger 'inview' will be used
| title  | String   | The title to appear on the dialog
| body  | String   | The message to explain the dialog options
| _buttons    | Object   | The labels for the button options

The default values for whether bookmarking is on/off and the level of bookmarking can be overriden for each contentObject of "_type": "page" within the `contentObjects.json` file . For example:

    "_bookmarking": {
      "_isEnabled": false,
      "_level": "page"
    }
