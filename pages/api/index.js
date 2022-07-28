"use strict";
const path = require('path');
const { ranking } = require('../controller/ranking');
const attachment_response = {
    resource_name: "I'm an Attachment",
    resource_url: "https://asana-app-aashan.vercel.app/auth",
  };
  
const  widget_response = {
    template: "summary_with_details_v0",
    metadata: {
      fields: [
        {
          name: "I'm a name",
          type: "datetime_with_icon",
          datetime: "2012-02-22T02:06:58.147Z",
          icon_url: "https://placekitten.com/16/16",
        },
        {
          name: "I'm a name",
          type: "pill",
          text: "I'm text",
          color: "none",
        },
        {
          name: "I'm a name",
          type: "text_with_icon",
          text: "I'm text",
        },
        {
          name: "I'm a name",
          type: "pill",
          text: "I'm text",
          color: "hot-pink",
        },
        {
          name: "I'm a name",
          type: "text_with_icon",
          text: "I'm text",
          icon_url: "https://placekitten.com/16/16",
        },
      ],
      footer: "I'm a footer",
      num_comments: 2,
      subicon_url: "https://placekitten.com/16/16",
      subtitle: "I'm a subtitle",
      title: "I'm a Widget",
    },
  };
  
const  form_response = {
    template: "form_metadata_v0",
    metadata: {
      title: "I'm a title",
      on_submit_callback: "https://asana-app-aashan.vercel.app/form/submit",
      fields: [
        {
          name: "I'm a single_line_text",
          type: "single_line_text",
          id: "single_line_text_full_width",
          is_required: false,
          placeholder: "[full width]",
          width: "full",
        },
        {
          name: "I'm a single_line_text",
          type: "single_line_text",
          id: "single_line_text_half_width",
          is_required: false,
          placeholder: "[half width]",
          width: "half",
        },
        {
          name: "I'm a single_line_text with is_watched enabled",
          type: "single_line_text",
          id: "single_line_text_full_width_is_watched",
          is_required: false,
          is_watched: true,
          placeholder: "[full width]",
          width: "full",
        },
        {
          name: "I'm a multi_line_text",
          type: "multi_line_text",
          id: "multi_line_text",
          is_required: false,
          placeholder: "[placeholder]",
        },
        {
          type: "static_text",
          id: "static_text",
          name: "I'm a static_text",
        },
        {
          name: "I'm a rich_text",
          type: "rich_text",
          id: "rich_text",
          is_required: false,
          placeholder: "[placeholder]",
        },
        {
          name: "I'm a dropdown",
          type: "dropdown",
          id: "dropdown_half_width",
          is_required: false,
          options: [
            {
              id: "1",
              label: "I'm a label",
            },
            {
              id: "2",
              label: "I'm a label",
              icon_url: "https://placekitten.com/16/16",
            },
          ],
          width: "half",
        },
        {
          name: "I'm a dropdown",
          type: "dropdown",
          id: "dropdown_full_width",
          is_required: false,
          options: [
            {
              id: "1",
              label: "I'm a label",
            },
            {
              id: "2",
              label: "I'm a label",
              icon_url: "https://placekitten.com/16/16",
            },
          ],
          width: "full",
        },
        {
          name: "I'm a checkbox",
          type: "checkbox",
          id: "checkbox",
          is_required: false,
          options: [
            {
              id: "1",
              label: "I'm a label",
            },
            {
              id: "2",
              label: "I'm a label",
            },
          ],
        },
        {
          name: "I'm a radio_button",
          type: "radio_button",
          id: "radio_button",
          is_required: false,
          options: [
            {
              id: "1",
              label: "I'm a label",
            },
            {
              id: "2",
              label: "I'm a label",
              sub_label: "I'm a sub_label",
            },
          ],
        },
        {
          name: "I'm a date",
          type: "date",
          id: "date",
          is_required: false,
          placeholder: "[placeholder]",
        },
        {
          name: "I'm a datetime",
          type: "datetime",
          id: "datetime",
          is_required: false,
          placeholder: "[placeholder]",
        },
        {
          name: "I'm a typeahead",
          type: "typeahead",
          id: "typeahead_half_width",
          is_required: false,
          typeahead_url: "https://asana-app-aashan.vercel.app/search/typeahead",
          placeholder: "[half width]",
          width: "half",
        },
        {
          name: "I'm a typeahead",
          type: "typeahead",
          id: "typeahead_full_width",
          is_required: false,
          typeahead_url: "https://asana-app-aashan.vercel.app/search/typeahead",
          placeholder: "[full width]",
          width: "full",
        },
      ],
      on_change_callback: "https://asana-app-aashan.vercel.app/form/onchange",
    },
  };
const  action_response = {
    "metadata": {
      fields: [
   
        {
          name: "I'm a single_line_text",
          type: "single_line_text",
          id: "single_line_text_half_width",
          is_required: false,
          placeholder: "[half width]",
          width: "half",
        },
        {
          name: "I'm a typeahead",
          type: "typeahead",
          id: "typeahead_half_width",
          is_required: false,
          typeahead_url: "https://asana-app-aashan.vercel.app/action/get/rule_action",
          placeholder: "[half width]",
          width: "half",
        },
      
       
     
      
       
       
       
      ],
      "on_change_callback": "https://asana-app-aashan.vercel.app/action/change",
      "on_submit_callback": "https://asana-app-aashan.vercel.app/action/submit_form",
      "submit_button_text": "Create New Issue",
      "title": "Create New Issue"
    },
    "template": "form_metadata_v0"
  }
  
const  run_action = {
    "action_result": "ok",
    "error": "That resource no longer exists",
    "resources_created": [
      {
        "error": "No resource matched that input",
        "resource_name": "Build the Thing",
        "resource_url": "https://asana-app-aashan.vercel.app/action/submit"
      }
    ]
  }
  
const  rule_action_typeahead = {
    "header": "List of messages",
    "items": [
      {
        "icon_url": "https://example-icon.png",
        "subtitle": "OTP",
        "title": "OTP Team PF",
        "value": "OTP"
      }
    ]
  }

  
  
  
  
  
const  typeahead_response = {
    items: [
      {
        title: "I'm a title",
        subtitle: "I'm a subtitle",
        value: "some_value",
        icon_url: "https://placekitten.com/16/16",
      },
      {
        title: "I'm a title",
        subtitle: "I'm a subtitle",
        value: "some_value",
        icon_url: "https://placekitten.com/16/16",
      },
    ],
  };
  
const sendSuccess = ()=>{
  window.opener.postMessage("success", "https://app.asana.com")

}

module.exports = function(app,asana,Config){
    app.get("/auth", (req, res) => {
        console.log("Auth happened!",req.body,'req');
        res.sendFile(path.join(__dirname, "./auth.html"));
        // sendSuccess()
        // res.json()
        

    
        
      });
      
      
      app.get("/widget", (req, res) => {
        console.log("Widget happened! "+ req.baseUrl);
        res.json(widget_response);
      });
      
      app.get("/form/metadata", (req, res) => {
        console.log("Modal Form happened!");
        res.json(form_response);
      });
      
      
      app.get("/search/typeahead", (req, res) => {
        console.log("Typeahead happened!");
        res.json(typeahead_response);
      });
      
      app.post("/action/submit", (req, res) => {
        console.log("action submit!"+ JSON.stringify(req.body));
        res.json(run_action)
        
        // ranking()
      
      });
      app.post("/action/submit_form", (req, res) => {
        console.log("action form submitted"+ JSON.stringify(req.body));
        res.json()
        ranking(asana,Config)
      
      });
      app.post("/action/onchange", (req, res) => {
        console.log("action change!"+ req.body);
        res.json(action_response);
      });
      
      app.get("/action/get", (req, res) => {
        console.log("action happened!",req.body);
        res.json(action_response);
      });
      
      
      app.get("/action/get/rule_action", (req, res) => {
        console.log("action happened!",req.body);
        res.json(rule_action_typeahead);
      });
      app.post("/form/onchange", (req, res) => {
        console.log("OnChange happened!");
        console.log(req.body);
        res.json(form_response);
      });
      
      app.post("/search/attach", (req, res) => {
        console.log("Attach happened!");
        console.log(req.body);
        res.json(attachment_response);
      });
      
      app.post("/form/submit", (req, res) => {
        console.log("Modal Form submitted!");
        console.log(req.body,'req body');
        res.json(attachment_response)
      });
}

















  
  
