define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

Handlebars.registerPartial("buttons", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "<a href=\"#\" class=\"button submit\">\r\n    <span>  \r\n        ";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.submit : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += " \r\n    </span>\r\n</a>\r\n<a href=\"#\" class=\"button reset\">\r\n    <span>\r\n        ";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.reset : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += " \r\n    </span>\r\n</a> \r\n<a href=\"#\" class=\"button model\">\r\n    <span> \r\n        ";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.showCorrectAnswer : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += " \r\n    </span>\r\n</a>\r\n<a href=\"#\" class=\"button user\">\r\n    <span>\r\n        ";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.hideCorrectAnswer : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + " \r\n    </span>\r\n</a>";
},"useData":true}));

Handlebars.registerPartial("component", Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "	<div class=\""
    + escapeExpression(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_component","hash":{},"data":data}) : helper)))
    + "-title component-title\">\r\n	    <div role=\"heading\" tabindex=\"0\" class=\""
    + escapeExpression(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_component","hash":{},"data":data}) : helper)))
    + "-title-inner component-title-inner\"  aria-level=\"4\">\r\n	        ";
  stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n	    </div>\r\n	</div>\r\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "	<div class=\""
    + escapeExpression(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_component","hash":{},"data":data}) : helper)))
    + "-body component-body\">\r\n	    <div class=\""
    + escapeExpression(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_component","hash":{},"data":data}) : helper)))
    + "-body-inner component-body-inner\">\r\n	        ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n	    </div>\r\n	</div>\r\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "	<div class=\""
    + escapeExpression(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_component","hash":{},"data":data}) : helper)))
    + "-instruction component-instruction\">\r\n	    <div class=\""
    + escapeExpression(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_component","hash":{},"data":data}) : helper)))
    + "-instruction-inner component-instruction-inner\">\r\n	        ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.instruction : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n	    </div>\r\n	</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.displayTitle : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.instruction : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true}));

Handlebars.registerPartial("state", Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "		<span tabindex=\"0\" role=\"region\" class=\"aria-label a11y-ignore-focus prevent-default\" id=\"buttons-aria-label-complete\">"
    + escapeExpression(((helpers.a11y_normalize || (depth0 && depth0.a11y_normalize) || helperMissing).call(depth0, (depth0 != null ? depth0.displayTitle : depth0), {"name":"a11y_normalize","hash":{},"data":data})))
    + " "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.complete : stack1), depth0))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isQuestionType : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</span>\r\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._canShowFeedback : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"3":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.correct : stack1), depth0));
  },"6":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incorrect : stack1), depth0));
  },"8":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "		<span tabindex=\"0\" role=\"region\" class=\"aria-label a11y-ignore-focus prevent-default\" id=\"buttons-aria-label-incomplete\">"
    + escapeExpression(((helpers.a11y_normalize || (depth0 && depth0.a11y_normalize) || helperMissing).call(depth0, (depth0 != null ? depth0.displayTitle : depth0), {"name":"a11y_normalize","hash":{},"data":data})))
    + " "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incomplete : stack1), depth0))
    + "</span>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"accessibility-state\">\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true}));

this["Handlebars"]["templates"]["accordion"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "        <div class=\"accordion-item\">\r\n            <a href=\"#\" role=\"button\" class=\"accordion-item-title ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisited : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" aria-expanded=\"false\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\r\n              <div class=\"accordion-item-title-inner\">\r\n                <div class=\"accordion-item-title-icon icon icon-plus h5\"></div>\r\n                      ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n              </div>\r\n            </a>\r\n            <div class=\"accordion-item-body\">\r\n                <div class=\"accordion-item-body-inner\">\r\n                    ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._graphic : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                </div>\r\n            </div>\r\n        </div>\r\n";
},"2":function(depth0,helpers,partials,data) {
  return "visited";
  },"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                    <div class=\"accordion-item-graphic\">\r\n                        <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" tabindex=\"0\">     \r\n                    </div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"accordion-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._accordion : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\r\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"accordion-widget component-widget\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["assessmentResults"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "        <div class=\"results-retry component-feedback\">\r\n            <div class=\"results-retry-inner component-feedback-inner\">\r\n                ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.retryFeedback : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n            </div>\r\n            <div class=\"results-retry-button\">\r\n                <button>";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._retry : depth0)) != null ? stack1.button : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</button>\r\n            </div>\r\n        </div>\r\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._retry : depth0)) != null ? stack1.button : stack1), depth0));
  },"4":function(depth0,helpers,partials,data) {
  return "Retry";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"results-inner component-inner\">\r\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"results-widget component-widget\">\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isRetryEnabled : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["blank"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"blank-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._blank : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\"></div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["gmcq"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"5":function(depth0,helpers,partials,data) {
  return "correct";
  },"7":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, functionType="function", buffer = "        <div class=\"gmcq-item component-item ";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(8, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + " "
    + escapeExpression(((helpers.odd || (depth0 && depth0.odd) || helperMissing).call(depth0, (data && data.index), {"name":"odd","hash":{},"data":data})))
    + "\">\r\n            <input type=\"checkbox\" id=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" aria-labelledby=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "-aria\"/>\r\n            <label id=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "-aria\" for=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" class=\"component-item-color component-item-text-color component-item-border ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isSelected : depth0), {"name":"if","hash":{},"fn":this.program(11, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\r\n\r\n                <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" data-large=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.large : stack1), depth0))
    + "\" data-small=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.small : stack1), depth0))
    + "\"/>\r\n\r\n                <div class=\"gmcq-item-checkbox\">\r\n                    <div class=\"gmcq-item-state\">\r\n                        <div class=\"gmcq-item-icon gmcq-answer-icon ";
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1]._isRadio : depths[1]), {"name":"if","hash":{},"fn":this.program(13, data, depths),"inverse":this.program(15, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " icon\"></div>\r\n                        <div class=\"gmcq-item-icon gmcq-correct-icon icon icon-tick\"></div>\r\n                        <div class=\"gmcq-item-icon gmcq-incorrect-icon icon icon-cross\"></div>\r\n                    </div>\r\n                    <div class=\"gmcq-item-inner h5\">\r\n                        ";
  stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n                    </div>\r\n                </div>\r\n            </label>\r\n        </div>\r\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"9":function(depth0,helpers,partials,data) {
  return "incorrect";
  },"11":function(depth0,helpers,partials,data) {
  return "selected";
  },"13":function(depth0,helpers,partials,data) {
  return "radio";
  },"15":function(depth0,helpers,partials,data) {
  return "checkbox";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"gmcq-inner component-inner clearfix\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._gmcq : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._ariaRegions : stack1)) != null ? stack1.gmcq : stack1), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\r\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"gmcq-widget component-widget clearfix ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\r\n    <div class=\"buttons\">\r\n    </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["graphic"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " graphic-widget-attribution";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "        <div class=\"graphic-attribution\">";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"graphic-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._graphic : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\r\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"graphic-widget component-widget";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\r\n        <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-label=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" data-large=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.large : stack1), depth0))
    + "\" data-small=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.small : stack1), depth0))
    + "\"  tabindex=\"0\"/>\r\n    </div>\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["hotgraphic"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "          <div class=\"hotgraphic-popup-nav component-item-color\">\r\n            <a href=\"#\" class=\"hotgraphic-popup-controls back\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\" role=\"button\">\r\n              <div class=\"hotgraphic-popup-arrow-l component-item-text-color icon icon-controls-small-left\"></div>\r\n            </a>\r\n            <div class=\"hotgraphic-popup-count component-item-text-color\">\r\n              <span class=\"current\">1</span>/<span class=\"total\">3</span>\r\n            </div>\r\n            <a href=\"#\" class=\"hotgraphic-popup-controls next\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\" role=\"button\">\r\n              <div class=\"hotgraphic-popup-arrow-r component-item-text-color icon icon-controls-small-right\"></div>\r\n            </a>\r\n          </div>\r\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "          <div class=\"hotgraphic-item component-item item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + " "
    + escapeExpression(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_classes","hash":{},"data":data}) : helper)))
    + "\">\r\n            <div class=\"hotgraphic-item-graphic\">\r\n              <div class=\"hotgraphic-item-graphic-inner\">\r\n                <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\"/>\r\n              </div>\r\n            </div>\r\n            <div class=\"hotgraphic-item-body\">\r\n              <div class=\"hotgraphic-item-body-inner\">\r\n                <div class=\"h5 accessible-text-block\" role=\"heading\" aria-level=\"5\" tabindex=\"0\">\r\n                  ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n                </div>\r\n                <p>\r\n                  ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "      <a href=\"#\" class=\"hotgraphic-graphic-pin component-item-text-color item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisited : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" data-id=\"item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" style=\"top:";
  stack1 = ((helper = (helper = helpers._top || (depth0 != null ? depth0._top : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_top","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "%; left:";
  stack1 = ((helper = (helper = helpers._left || (depth0 != null ? depth0._left : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_left","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "%;\" role=\"button\" aria-label=\"Item "
    + escapeExpression(((helpers.numbers || (depth0 && depth0.numbers) || helperMissing).call(depth0, (data && data.index), {"name":"numbers","hash":{},"data":data})))
    + ". "
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + ".\">\r\n        <div class=\"hotgraphic-graphic-pin-icon component-item-color icon icon-pin item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\"></div>\r\n      </a>\r\n";
},"8":function(depth0,helpers,partials,data) {
  return "visited";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"hotgraphic-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._hotGraphic : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._hotGraphic : stack1)) != null ? stack1.ariaRegion : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\r\n";
  stack1 = this.invokePartial(partials.component, '  ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "  <div class=\"hotgraphic-widget component-widget\">\r\n\r\n    <div class=\"hotgraphic-graphic\">\r\n\r\n      <div class=\"hotgraphic-popup\" role=\"dialog\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.hotgraphicPopUp : stack1), depth0))
    + "\">\r\n\r\n        <div class=\"hotgraphic-popup-toolbar component-item-color clearfix\">\r\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._hidePagination : depth0), {"name":"unless","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "          <a href=\"#\" class=\"hotgraphic-popup-done\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\" role=\"button\">\r\n            <div class=\"hotgraphic-popup-close component-item-text-color icon icon-cross\"></div>\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"hotgraphic-popup-inner clearfix\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\r\n      </div>\r\n      <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" title=\"";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.title : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\"/>\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\r\n  </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["matching"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"5":function(depth0,helpers,partials,data) {
  return "correct";
  },"7":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "    <div class=\"matching-item item ";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(8, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">\r\n      <div class=\"matching-item-title\">";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.text : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\r\n      <div class=\"matching-select-container component-item-color\">\r\n        <div class=\"matching-select-state\">\r\n          <div class=\"matching-select-icon component-text-color matching-dropdown-icon icon icon-controls-small-down\"></div>\r\n          <div class=\"matching-select-icon component-text-color matching-correct-icon icon icon-tick\"></div>\r\n          <div class=\"matching-select-icon component-text-color matching-incorrect-icon icon icon-cross\"></div>\r\n        </div>\r\n        <select class=\"matching-select component-text-color\"";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(11, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\r\n          <option>\r\n            "
    + escapeExpression(lambda((depths[1] != null ? depths[1].placeholder : depths[1]), depth0))
    + "\r\n          </option>\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._options : depth0), {"name":"each","hash":{},"fn":this.program(13, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </select>\r\n      </div>\r\n    </div>\r\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"9":function(depth0,helpers,partials,data) {
  return "incorrect";
  },"11":function(depth0,helpers,partials,data) {
  return " disabled";
  },"13":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "          <option>\r\n            "
    + escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper)))
    + "\r\n          </option>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"matching-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._matching : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._matching : stack1)) != null ? stack1.ariaRegion : stack1), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\r\n";
  stack1 = this.invokePartial(partials.component, '  ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "  <div class=\"matching-widget component-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </div>\r\n  <div class=\"buttons\">\r\n  </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["mcq"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"5":function(depth0,helpers,partials,data) {
  return "correct";
  },"7":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "        <div class=\"mcq-item component-item component-item-color ";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(8, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">\r\n        <input type=\"checkbox\" id=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" aria-labelledby=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "-aria\"/>\r\n            <label id=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "-aria\" for=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" class=\"component-item-text-color component-item-border";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(13, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isSelected : depth0), {"name":"if","hash":{},"fn":this.program(15, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\r\n                <div class=\"mcq-item-state\">\r\n                    <div class=\"mcq-item-icon mcq-answer-icon ";
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1]._isRadio : depths[1]), {"name":"if","hash":{},"fn":this.program(17, data, depths),"inverse":this.program(19, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " component-item-text-color icon\"></div>\r\n                    <div class=\"mcq-item-icon mcq-correct-icon icon icon-tick\"></div>\r\n                    <div class=\"mcq-item-icon mcq-incorrect-icon icon icon-cross\"></div>\r\n                </div>\r\n                <div class=\"mcq-item-inner h5\">\r\n                    ";
  stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n                </div>\r\n            </label>\r\n        </div>\r\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.program(11, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"9":function(depth0,helpers,partials,data) {
  return " correct";
  },"11":function(depth0,helpers,partials,data) {
  return " incorrect";
  },"13":function(depth0,helpers,partials,data) {
  return " disabled ";
  },"15":function(depth0,helpers,partials,data) {
  return " selected";
  },"17":function(depth0,helpers,partials,data) {
  return "radio";
  },"19":function(depth0,helpers,partials,data) {
  return "checkbox";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"mcq-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._mcq : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._mcq : stack1)) != null ? stack1.ariaRegion : stack1), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\r\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"mcq-widget component-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\r\n    <div class=\"buttons\">\r\n    </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["media"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._media : stack1)) != null ? stack1.transcriptButton : stack1), depth0));
  },"3":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "      <audio src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.mp3 : stack1), depth0))
    + "\" type=\"audio/mp3\" style=\"width: 100%; height: 100%;\"/>\r\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.ogg : stack1), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"8":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "        <audio src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.ogg : stack1), depth0))
    + "\" type=\"audio/ogg\" style=\"width: 100%; height: 100%;\"/>\r\n";
},"10":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "        <video preload=\"none\" width=\"640px\" height=\"360px\" poster=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.poster : stack1), depth0))
    + "\" style=\"width:100%; height:100%;\">\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.source : stack1), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.program(13, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._useClosedCaptions : depth0), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </video>\r\n";
},"11":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <source src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.source : stack1), depth0))
    + "\" type=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.type : stack1), depth0))
    + "\"/>\r\n";
},"13":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <source src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.mp4 : stack1), depth0))
    + "\" type=\"video/mp4\"/>\r\n            <source src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.ogv : stack1), depth0))
    + "\" type=\"video/ogg\"/>\r\n";
},"15":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.cc : stack1), {"name":"each","hash":{},"fn":this.program(16, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"16":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                  <track kind=\"subtitles\" src=\""
    + escapeExpression(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"src","hash":{},"data":data}) : helper)))
    + "\" srclang=\""
    + escapeExpression(((helper = (helper = helpers.srclang || (depth0 != null ? depth0.srclang : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"srclang","hash":{},"data":data}) : helper)))
    + "\" />\r\n";
},"18":function(depth0,helpers,partials,data) {
  var stack1, buffer = "    <div class=\"media-transcript-container\">\r\n\r\n      <div class=\"media-transcript-button-container\">\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1._inlineTranscript : stack1), {"name":"if","hash":{},"fn":this.program(19, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1._externalTranscript : stack1), {"name":"if","hash":{},"fn":this.program(24, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\r\n\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1._inlineTranscript : stack1), {"name":"if","hash":{},"fn":this.program(27, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n    </div>\r\n";
},"19":function(depth0,helpers,partials,data) {
  var stack1, buffer = "          <a href=\"#\" class=\"media-inline-transcript-button button\" role=\"button\">\r\n            <div class=\"transcript-text-container\">\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.inlineTranscriptButton : stack1), {"name":"if","hash":{},"fn":this.program(20, data),"inverse":this.program(22, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\r\n          </a>\r\n";
},"20":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.inlineTranscriptButton : stack1), depth0))
    + "\r\n";
},"22":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLink : stack1), depth0))
    + "\r\n";
},"24":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "          <a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLink : stack1), depth0))
    + "\" target=\"_blank\" class=\"media-external-transcript-button button\" role=\"button\">\r\n            <div class=\"transcript-text-container\">\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLinkButton : stack1), {"name":"if","hash":{},"fn":this.program(25, data),"inverse":this.program(22, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\r\n          </a>\r\n";
},"25":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLinkButton : stack1), depth0))
    + "\r\n";
},"27":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "          <div class=\"media-inline-transcript-body-container\">\r\n            <div class=\"media-inline-transcript-body\">\r\n            ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.inlineTranscriptBody : stack1), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n            </div>\r\n          </div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"media-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._media : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + " ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.transcriptLink : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._media : stack1)) != null ? stack1.ariaRegion : stack1), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\r\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"media-widget component-widget a11y-ignore-aria\">\r\n\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.mp3 : stack1), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._transcript : depth0), {"name":"if","hash":{},"fn":this.program(18, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["narrative"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "narrative-text-controls";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                <div class=\"narrative-content-item\">\r\n                    <div class=\"narrative-content-title\">\r\n                        <div class=\"narrative-content-title-inner accessible-text-block h5\" role=\"heading\" aria-level=\"5\" tabindex=\"0\">\r\n                            ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += " \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"narrative-content-body\">\r\n                        <div class=\"narrative-content-body-inner\">\r\n                            ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n                        </div> \r\n                    </div>\r\n                </div>\r\n";
},"5":function(depth0,helpers,partials,data) {
  return "                        <div class=\"narrative-progress component-item-color component-item-border\"></div>\r\n";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                    <a href=\"#\" role=\"button\" class=\"narrative-strapline-title\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.strapline || (depth0 != null ? depth0.strapline : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"strapline","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\r\n                        <div class=\"narrative-strapline-title-inner accessible-text-block h5\">\r\n                            ";
  stack1 = ((helper = (helper = helpers.strapline || (depth0 != null ? depth0.strapline : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"strapline","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " \r\n                        </div>\r\n                        <div class=\"icon icon-plus\"></div>\r\n                        <div class=\"focus-rect\"></div>\r\n                    </a>\r\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "                <div class=\"narrative-slider-graphic ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.visited : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\r\n                    <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\"/>\r\n                </div>\r\n";
},"10":function(depth0,helpers,partials,data) {
  return "visited";
  },"12":function(depth0,helpers,partials,data) {
  return "                <div class=\"narrative-progress component-item-color component-item-border\"></div>\r\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"narrative-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._narrative : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\r\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"narrative-widget component-widget ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._hasNavigationInTextArea : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\r\n\r\n        <div class=\"narrative-content\">\r\n            <div class=\"narrative-content-inner\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                <div class=\"narrative-controls-container clearfix\">\r\n                    <div class=\"narrative-indicators\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                    </div>\r\n                    <a href=\"#\" class=\"narrative-controls narrative-control-left\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\r\n                        <div class=\"icon icon-controls-left\"></div>\r\n                    </a>\r\n                    <a href=\"#\" class=\"narrative-controls narrative-control-right\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\">\r\n                        <div class=\"icon icon-controls-right\"></div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"narrative-strapline\">\r\n            <div class=\"narrative-strapline-header\">\r\n                <div class=\"narrative-strapline-header-inner clearfix\">\r\n                    <div></div>\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"narrative-slide-container\">\r\n\r\n            <a href=\"#\" class=\"narrative-controls narrative-control-left\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\r\n                <div class=\"icon icon-controls-left\"></div>\r\n            </a>\r\n            <a href=\"#\" class=\"narrative-controls narrative-control-right\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\">\r\n                <div class=\"icon icon-controls-right\"></div>\r\n            </a>\r\n\r\n            <div class=\"narrative-slider clearfix\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </div>\r\n            <div class=\"narrative-indicators\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\r\n        </div>\r\n\r\n        <div class=\"clearfix\"></div>\r\n\r\n    </div>    \r\n</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["slider"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"5":function(depth0,helpers,partials,data) {
  return "correct";
  },"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <a href=\"#\" tabindex=\"0\" role=\"button\" class=\"slider-scale-number\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + "</a>\r\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.correct : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"10":function(depth0,helpers,partials,data) {
  return "incorrect";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"slider-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._slider : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._slider : stack1)) != null ? stack1.ariaRegion : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\r\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"slider-widget component-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\r\n        <div class=\"slider-holder clearfix\">\r\n            <div class=\"slider-scale-labels\">\r\n                <div class=\"slider-scale-start\" tabindex=\"0\" role=\"region\">"
    + escapeExpression(((helper = (helper = helpers.labelStart || (depth0 != null ? depth0.labelStart : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"labelStart","hash":{},"data":data}) : helper)))
    + "</div>\r\n                <div class=\"slider-scale-end\" tabindex=\"0\" role=\"region\">"
    + escapeExpression(((helper = (helper = helpers.labelEnd || (depth0 != null ? depth0.labelEnd : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"labelEnd","hash":{},"data":data}) : helper)))
    + "</div>\r\n            </div>\r\n            <div class=\"slider-scale-numbers clearfix\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </div>\r\n            <div class=\"slider-scaler component-item-color\">\r\n                <div class=\"slider-modelranges\"></div>\r\n                <div class=\"slider-markers\"></div>\r\n                <div class=\"slider-answer component-item-color component-item-text-color\"></div>\r\n                <div class=\"slider-scale-marker component-item-color component-item-text-color a11y-ignore\" aria-hidden=\"true\" tabindex=\"-1\"></div>\r\n            </div>\r\n            <div class=\"slider-background\">\r\n                <div class=\"slider-item component-item ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\r\n                    <div class=\"slider-sliderange\">\r\n                        <a href=\"#\" class=\"slider-handle component-item-color component-item-text-color a11y-ignore\" tabindex=\"-1\" aria-hidden=\"true\"></a>\r\n                        <div class=\"slider-bar component-item-color\"></div>\r\n                    </div>\r\n                    <div class=\"slider-outer-bar\">\r\n                    <div class=\"slider-item-state\">\r\n                        <div class=\"slider-icon slider-correct-icon icon icon-tick\"></div>\r\n                        <div class=\"slider-icon slider-incorrect-icon icon icon-cross\"></div>\r\n                    </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"buttons\">\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["text"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"text-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._text : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\r\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["textinput"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"5":function(depth0,helpers,partials,data) {
  return "correct";
  },"7":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "        <div class=\"textinput-item component-item component-item-color component-item-border clearfix ";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(8, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.prefix : depth0), {"name":"if","hash":{},"fn":this.program(11, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"if","hash":{},"fn":this.program(13, data, depths),"inverse":this.program(15, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.suffix : depth0), {"name":"if","hash":{},"fn":this.program(17, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            <div class=\"textinput-item-state\">\r\n                <div class=\"textinput-icon textinput-correct-icon icon icon-tick\"></div>\r\n                <div class=\"textinput-icon textinput-incorrect-icon icon icon-cross\"></div>\r\n            </div>\r\n        </div>\r\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"9":function(depth0,helpers,partials,data) {
  return "incorrect";
  },"11":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "                <label class=\"textinput-item-prefix component-item-text-color\" id=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "-aria\" for=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.prefix || (depth0 != null ? depth0.prefix : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"prefix","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\r\n                    ";
  stack1 = ((helper = (helper = helpers.prefix || (depth0 != null ? depth0.prefix : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"prefix","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n                </label>\r\n";
},"13":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "                <input type=\"text\" placeholder=\"";
  stack1 = ((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"placeholder","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" class=\"textinput-item-textbox\" data-id=\"input-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" id=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" aria-labelledby=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "-aria\" value=\"\" role=\"textbox\">\r\n";
},"15":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "                <input type=\"text\" placeholder=\"";
  stack1 = ((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"placeholder","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" class=\"textinput-item-textbox\" data-id=\"input-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.userAnswer || (depth0 != null ? depth0.userAnswer : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"userAnswer","hash":{},"data":data}) : helper)))
    + "\" disabled=\"true\" role=\"textbox\">\r\n";
},"17":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "                <label class=\"textinput-item-suffix component-item-text-color\" id=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "-aria\" for=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.suffix || (depth0 != null ? depth0.suffix : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"suffix","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\r\n                    ";
  stack1 = ((helper = (helper = helpers.suffix || (depth0 != null ? depth0.suffix : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"suffix","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n                </label>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"textinput-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._textInput : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._textInput : stack1)) != null ? stack1.ariaRegion : stack1), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\r\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"textinput-widget component-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\r\n    <div class=\"buttons\">\r\n    </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["pageLevelProgress"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "    <div role=\"listitem\" class=\"page-level-progress-item drawer-item\">\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisible : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            <div class=\"page-level-progress-item-title-inner accessible-text-block h5\">\r\n            ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n            </div>\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.program(16, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisible : depth0), {"name":"if","hash":{},"fn":this.program(21, data),"inverse":this.program(23, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\r\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "        <a class=\"page-level-progress-item-title clearfix drawer-item-open\" tabindex=\"0\" role=\"button\" href=\"#\" data-page-level-progress-id=\""
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\" aria-label=\""
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\r\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.complete : stack1), depth0));
  },"7":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incomplete : stack1), depth0));
  },"9":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "        <div class=\"page-level-progress-item-title drawer-item-open disabled clearfix\">\r\n            <a class=\"aria-label prevent-default\" tabindex=\"0\" role=\"button\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.locked : stack1), depth0))
    + ". "
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</a>\r\n";
},"11":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                <div class=\"page-level-progress-indicator page-level-progress-indicator-";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.program(14, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\r\n                    <div class=\"page-level-progress-indicator-bar\">\r\n                    </div>\r\n                </div>\r\n";
},"12":function(depth0,helpers,partials,data) {
  return "complete";
  },"14":function(depth0,helpers,partials,data) {
  return "incomplete";
  },"16":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isOptional : depth0), {"name":"if","hash":{},"fn":this.program(17, data),"inverse":this.program(19, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"17":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                    <div class=\"page-level-progress-item-optional-text\">\r\n                    "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.optionalContent : stack1), depth0))
    + "\r\n                    </div>\r\n";
},"19":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                    <div class=\"page-level-progress-indicator page-level-progress-indicator-";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.program(14, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\r\n                        <div class=\"page-level-progress-indicator-bar\">\r\n                        </div>\r\n                    </div>\r\n";
},"21":function(depth0,helpers,partials,data) {
  return "        </a>\r\n";
  },"23":function(depth0,helpers,partials,data) {
  return "        </div>\r\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"page-level-progress-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.pageLevelProgress : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.pageLevelProgress : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\r\n    <div role=\"list\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.components : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressMenu"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"page-level-progress-menu-item-indicator\">\r\n    <div class=\"page-level-progress-menu-item-indicator-bar\" style=\"width:"
    + escapeExpression(((helper = (helper = helpers.completedChildrenAsPercentage || (depth0 != null ? depth0.completedChildrenAsPercentage : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"completedChildrenAsPercentage","hash":{},"data":data}) : helper)))
    + "%\"><a class=\"aria-label\" role=\"region\" tabindex=\"0\"></a></div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressNavigation"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"page-level-progress-navigation-completion\">\r\n	<div class=\"page-level-progress-navigation-bar\"></div>\r\n</div>";
  },"useData":true});

this["Handlebars"]["templates"]["resources"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "			<a href=\"#\" class=\"resources-show-all selected\" data-filter=\"all\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.allAria : stack1), depth0))
    + "\" tabindex=\"0\" role=\"button\">\r\n				<span>"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.all : stack1), depth0))
    + "</span>\r\n			</a>\r\n";
  stack1 = ((helpers.if_collection_contains || (depth0 && depth0.if_collection_contains) || helperMissing).call(depth0, (depth0 != null ? depth0.resources : depth0), "_type", "document", {"name":"if_collection_contains","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.if_collection_contains || (depth0 && depth0.if_collection_contains) || helperMissing).call(depth0, (depth0 != null ? depth0.resources : depth0), "_type", "media", {"name":"if_collection_contains","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.if_collection_contains || (depth0 && depth0.if_collection_contains) || helperMissing).call(depth0, (depth0 != null ? depth0.resources : depth0), "_type", "link", {"name":"if_collection_contains","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<a href=\"#\" class=\"resources-show-document\" data-filter=\"document\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.documentAria : stack1), depth0))
    + " tabindex=\"0\" role=\"button\"\">\r\n				<span>"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.document : stack1), depth0))
    + "</span>\r\n			</a>\r\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<a href=\"#\" class=\"resources-show-media\" data-filter=\"media\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.mediaAria : stack1), depth0))
    + "\" tabindex=\"0\" role=\"button\">\r\n				<span>"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.media : stack1), depth0))
    + "</span>\r\n			</a>\r\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<a href=\"#\" class=\"resources-show-link\" data-filter=\"link\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.linkAria : stack1), depth0))
    + "\" tabindex=\"0\" role=\"button\">\r\n				<span>"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.link : stack1), depth0))
    + "</span>\r\n			</a>\r\n";
},"10":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "	<div class=\"resources-item drawer-item "
    + escapeExpression(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_type","hash":{},"data":data}) : helper)))
    + "\">\r\n		<a role=\"listitem\" class=\"resources-item-open drawer-item-open\" target=\"_blank\" href=\""
    + escapeExpression(((helper = (helper = helpers._link || (depth0 != null ? depth0._link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_link","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"0\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += ". ";
  stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\r\n			<div class=\"drawer-item-title\">\r\n				<div class=\"drawer-item-title-inner h5\">";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\r\n			</div>\r\n			<div class=\"drawer-item-description\">\r\n				<div class=\"drawer-item-description-inner\">";
  stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\r\n			</div>\r\n		</a>\r\n	</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"resources-inner\" role=\"complementary\">\r\n	<div class=\"resources-filter clearfix resources-col-"
    + escapeExpression(((helpers.return_column_layout_from_collection_length || (depth0 && depth0.return_column_layout_from_collection_length) || helperMissing).call(depth0, (depth0 != null ? depth0.resources : depth0), "_type", {"name":"return_column_layout_from_collection_length","hash":{},"data":data})))
    + "\">\r\n";
  stack1 = ((helpers.if_collection_contains_only_one_item || (depth0 && depth0.if_collection_contains_only_one_item) || helperMissing).call(depth0, (depth0 != null ? depth0.resources : depth0), "_type", {"name":"if_collection_contains_only_one_item","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "	</div>\r\n	<div role=\"list\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.resources : depth0), {"name":"each","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["trickle-button"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " locking";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"trickle-button-inner component-inner";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isLocking : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\r\n        <button role=\"button\" class=\"button\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.text : stack1), depth0))
    + "</button>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["inspector"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "Parent: "
    + escapeExpression(((helper = (helper = helpers._parentId || (depth0 != null ? depth0._parentId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_parentId","hash":{},"data":data}) : helper)))
    + "\r\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "Classes: "
    + escapeExpression(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_classes","hash":{},"data":data}) : helper)))
    + "\r\n";
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "Layout: "
    + escapeExpression(((helper = (helper = helpers._layout || (depth0 != null ? depth0._layout : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_layout","hash":{},"data":data}) : helper)))
    + "\r\n";
},"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)));
  },"9":function(depth0,helpers,partials,data) {
  return "<none>";
  },"11":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\r\nPage Level Progress: ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._pageLevelProgress : depth0)) != null ? stack1._isEnabled : stack1), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.program(14, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"12":function(depth0,helpers,partials,data) {
  return "enabled";
  },"14":function(depth0,helpers,partials,data) {
  return "disabled";
  },"16":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\r\nCorrect:";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(17, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"17":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._shouldBeSelected : depth0), {"name":"if","hash":{},"fn":this.program(18, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"18":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((helpers.numbers || (depth0 && depth0.numbers) || helperMissing).call(depth0, (data && data.index), {"name":"numbers","hash":{},"data":data})));
},"20":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "\r\nCorrect:";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(21, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"21":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depths[1] != null ? depths[1]._items : depths[1])) != null ? stack1['1'] : stack1), {"name":"if","hash":{},"fn":this.program(22, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._options : depth0), {"name":"each","hash":{},"fn":this.program(24, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"22":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\r\n"
    + escapeExpression(((helpers.numbers || (depth0 && depth0.numbers) || helperMissing).call(depth0, (data && data.index), {"name":"numbers","hash":{},"data":data})))
    + ".";
},"24":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(25, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"25":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper)));
},"27":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\r\nCorrect: ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._correctAnswer : depth0), {"name":"if","hash":{},"fn":this.program(28, data),"inverse":this.program(30, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"28":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = helpers._correctAnswer || (depth0 != null ? depth0._correctAnswer : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_correctAnswer","hash":{},"data":data}) : helper)));
  },"30":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._correctRange : depth0)) != null ? stack1._bottom : stack1), depth0))
    + "–"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._correctRange : depth0)) != null ? stack1._top : stack1), depth0));
},"32":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "\r\nCorrect:";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(33, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"33":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depths[1] != null ? depths[1]._items : depths[1])) != null ? stack1['1'] : stack1), {"name":"if","hash":{},"fn":this.program(22, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._answers : depth0), {"name":"each","hash":{},"fn":this.program(34, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"34":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(lambda(depth0, depth0));
},"36":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_component","hash":{},"data":data}) : helper)))
    + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, buffer = "<div class=\"inspector\">\r\n	<a href=\"#\" target=\"_blank\" class=\"inspector-inner\" title=\"";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._parentId : depth0), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._classes : depth0), {"name":"if","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._layout : depth0), {"name":"if","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "Title: ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.title : depth0), {"name":"if","hash":{},"fn":this.program(7, data, depths),"inverse":this.program(9, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._component : depth0), {"name":"if","hash":{},"fn":this.program(11, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._selectable : depth0), {"name":"if","hash":{},"fn":this.program(16, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._component : depth0), "matching", {"name":"if_value_equals","hash":{},"fn":this.program(20, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._component : depth0), "slider", {"name":"if_value_equals","hash":{},"fn":this.program(27, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._component : depth0), "textinput", {"name":"if_value_equals","hash":{},"fn":this.program(32, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._component : depth0), {"name":"if","hash":{},"fn":this.program(36, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + escapeExpression(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_type","hash":{},"data":data}) : helper)))
    + " <span class=\"inspector-id\">"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "</span>\r\n	</a>\r\n</div>";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["boxmenu-item"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  return "visited";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "            <span class=\"menu-item-duration accessible-text-block\" role=\"region\" tabindex=\"0\">";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.durationLabel : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = ((helper = (helper = helpers.duration || (depth0 != null ? depth0.duration : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"duration","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</span>\r\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing;
  stack1 = ((helper = (helper = helpers.durationLabel || (depth0 != null ? depth0.durationLabel : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"durationLabel","hash":{},"data":data}) : helper));
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"8":function(depth0,helpers,partials,data) {
  return "Duration:";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"menu-item-inner\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.menuItem : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.menuItem : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\r\n    <div class=\"menu-item-graphic\">\r\n        <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" />\r\n    </div>\r\n    <div class=\"menu-item-title\">\r\n        <div class=\"menu-item-title-inner h3 accessible-text-block\" role=\"heading\" aria-level=\"2\" tabindex=\"0\">";
  stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\r\n    </div>\r\n    <div class=\"menu-item-body\">\r\n        <div class=\"menu-item-body-inner\">";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\r\n    </div>\r\n    <div class=\"menu-item-button\">\r\n        <a href=\"#/id/"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\" role=\"button\" aria-label=\""
    + escapeExpression(((helper = (helper = helpers.linkText || (depth0 != null ? depth0.linkText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkText","hash":{},"data":data}) : helper)))
    + "\" class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisited : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " accessible-text-block\">\r\n            ";
  stack1 = ((helper = (helper = helpers.linkText || (depth0 != null ? depth0.linkText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n        </a>\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.duration : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["boxmenu"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "				<div class=\"menu-title\">\r\n					<div class=\"menu-title-inner h1 accessible-text-block\" role=\"heading\" aria-level=\"1\" tabindex=\"0\">\r\n						";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n					</div>\r\n				</div>\r\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "				<div class=\"menu-body\">\r\n					<div class=\"menu-body-inner accessible-text-block\">\r\n						";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n					</div>\r\n				</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"menu-container\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.menu : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.menu : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\r\n	<div class='menu-container-inner box-menu-inner clearfix'>\r\n		<div class=\"menu-header\">\r\n			<div class=\"menu-header-inner\">\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.title : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "			</div>\r\n		</div>\r\n	</div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["article"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "        <div class=\"article-title\">\r\n            <div role=\"heading\" tabindex=\"0\" class=\"article-title-inner h2\"  aria-level=\"2\">\r\n                ";
  stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n            </div>\r\n        </div>\r\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "        <div class=\"article-body\">\r\n            <div class=\"article-body-inner\">\r\n                ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n            </div>\r\n        </div>\r\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "        <div class=\"article-instruction\">\r\n            <div class=\"article-instruction-inner\">\r\n                ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.instruction : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n            </div>\r\n        </div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"article-inner block-container\">\r\n\r\n    <div class=\"article-header\">\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.displayTitle : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.instruction : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["block"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "        <div class=\"block-title\">\r\n            <div role=\"heading\" tabindex=\"0\" class=\"block-title-inner h3\"  aria-level=\"3\">\r\n                ";
  stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n            </div>\r\n        </div>\r\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "        <div class=\"block-body\">\r\n            <div class=\"block-body-inner\">\r\n                ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n            </div>\r\n        </div>\r\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "        <div class=\"block-instruction\">\r\n            <div class=\"block-instruction-inner\">\r\n                ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.instruction : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n            </div>\r\n        </div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"block-inner\">\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.displayTitle : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.instruction : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n    <div class=\"component-container\">\r\n    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["buttons"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "        <div class=\"buttons-marking-icon icon display-none\">\r\n        </div>\r\n";
  },"3":function(depth0,helpers,partials,data) {
  return "    <div class=\"buttons-display\">\r\n        <div class=\"buttons-marking-icon icon display-none\">\r\n        </div>\r\n        <div class=\"buttons-display-inner\">\r\n        </div>\r\n    </div>\r\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"buttons-inner\">\r\n    <div class=\"buttons-cluster clearfix\">\r\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._shouldDisplayAttempts : depth0), {"name":"unless","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        <button class=\"buttons-action\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._submit : stack1)) != null ? stack1.ariaLabel : stack1), depth0))
    + "\">";
  stack1 = lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._submit : stack1)) != null ? stack1.buttonText : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</button>\r\n        <button class=\"buttons-feedback\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._showFeedback : stack1)) != null ? stack1.ariaLabel : stack1), depth0))
    + "\" disabled=\"true\">";
  stack1 = lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._showFeedback : stack1)) != null ? stack1.buttonText : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</button>\r\n    </div>\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._shouldDisplayAttempts : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});

this["Handlebars"]["templates"]["drawer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"drawer-inner\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.drawer : stack1), depth0))
    + "\">\r\n	<div class=\"drawer-toolbar clearfix\">\r\n		<div class=\"drawer-back-button\">\r\n		<a href=\"#\" class=\"drawer-back icon icon-controls-small-left\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\r\n		</a>\r\n		</div>\r\n		<div class=\"drawer-close-button\">\r\n		<a href=\"#\" class=\"drawer-close icon icon-cross\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closeDrawer : stack1), depth0))
    + "\">\r\n		</a>\r\n		</div>\r\n	</div>\r\n	<div class=\"drawer-holder\">\r\n	</div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["drawerItem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<a class=\"drawer-item-open "
    + escapeExpression(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"className","hash":{},"data":data}) : helper)))
    + "\" href=\"#\">\r\n	<div class=\"drawer-item-title\">\r\n		<div class=\"drawer-item-title-inner h5\">";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\r\n	</div>\r\n	<div class=\"drawer-item-description\">\r\n		<div class=\"drawer-item-description-inner\">";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.description : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\r\n	</div>\r\n</a>";
},"useData":true});

this["Handlebars"]["templates"]["loading"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"loading\">\r\n    <div class=\"loader-gif\"><div role=\"heading\" tabindex=\"0\" class=\"h3\" aria-level=\"1\">Loading...</div></div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["navigation"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"navigation-inner clearfix\" role=\"navigation\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.navigation : stack1), depth0))
    + "\">\r\n    <a href=\"#\" class=\"navigation-back-button icon icon-controls-small-left\" data-event=\"backButton\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\"></a>\r\n    <a href=\"#\" class=\"navigation-drawer-toggle-button icon icon-list\" data-event=\"toggleDrawer\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.navigationDrawer : stack1), depth0))
    + "\"></a>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["notify"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "                    <div class=\"notify-popup-icon\">\r\n                        <div class=\"icon";
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._type : depth0), "prompt", {"name":"if_value_equals","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._type : depth0), "alert", {"name":"if_value_equals","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\r\n                        </div>\r\n                    </div>\r\n";
},"2":function(depth0,helpers,partials,data) {
  return " icon-question";
  },"4":function(depth0,helpers,partials,data) {
  return " icon-warning";
  },"6":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                    <div class=\"notify-popup-title\">\r\n                        <div class=\"notify-popup-title-inner h5\" tabindex=\"0\" role=\"heading\" aria-level=\"1\">\r\n                        ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n                        </div>\r\n                    </div>\r\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "                    <div class=\"notify-popup-body\">\r\n                        <div class=\"notify-popup-body-inner\">";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\r\n                    </div>\r\n";
},"10":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                        <a href=\"#\" class=\"notify-popup-button notify-popup-alert-button\" role=\"button\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.confirmText || (depth0 != null ? depth0.confirmText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"confirmText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">";
  stack1 = ((helper = (helper = helpers.confirmText || (depth0 != null ? depth0.confirmText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"confirmText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</a>\r\n";
},"12":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._prompts : depth0), {"name":"each","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"13":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                            <a href=\"#\" class=\"notify-popup-button notify-popup-prompt-button\" data-event=\""
    + escapeExpression(((helper = (helper = helpers._callbackEvent || (depth0 != null ? depth0._callbackEvent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_callbackEvent","hash":{},"data":data}) : helper)))
    + "\" role=\"button\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.promptText || (depth0 != null ? depth0.promptText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"promptText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">";
  stack1 = ((helper = (helper = helpers.promptText || (depth0 != null ? depth0.promptText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"promptText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</a>\r\n";
},"15":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <a href=\"#\" class=\"notify-popup-done\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\r\n                <div class=\"notify-popup-icon-close icon icon-cross\"></div>\r\n            </a>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<div class=\"notify-popup notify-type-"
    + escapeExpression(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_type","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_classes","hash":{},"data":data}) : helper)))
    + "\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.feedbackPopUp : stack1), depth0))
    + "\">\r\n    <div class=\"notify-popup-inner\">\r\n        <div class=\"notify-popup-content\">\r\n            <div class=\"notify-popup-content-inner\">\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._showIcon : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.title : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n                <div class=\"notify-popup-buttons\" role=\"button\">\r\n";
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._type : depth0), "alert", {"name":"if_value_equals","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._type : depth0), "prompt", {"name":"if_value_equals","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "                </div>\r\n\r\n            </div>\r\n        </div>\r\n";
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._type : depth0), "popup", {"name":"if_value_equals","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\r\n</div>\r\n\r\n\r\n<div class=\"notify-shadow\"></div>";
},"useData":true});

this["Handlebars"]["templates"]["notifyPush"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"notify-push-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.feedbackPopUp : stack1), depth0))
    + "\">\r\n	<div class=\"notify-push-title\">\r\n		<div class=\"notify-push-title-inner h5\" tabindex=\"0\" role=\"heading\" aria-level=\"1\">\r\n			";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n		</div>\r\n	</div>\r\n	<div class=\"notify-push-body\">\r\n		<div class=\"notify-push-body-inner\">\r\n			";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n		</div>\r\n	</div>\r\n</div>\r\n<a href=\"#\" class=\"notify-push-close\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\r\n	<span class=\"icon icon-cross\"></span>\r\n</a>";
},"useData":true});

this["Handlebars"]["templates"]["page"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "					    <div class=\"page-title\">\r\n					        <div class=\"page-title-inner h1\" tabindex=\"0\" role=\"heading\" aria-level=\"1\">\r\n					            ";
  stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n					        </div>\r\n					    </div>\r\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "					    <div class=\"page-body\">\r\n					        <div class=\"page-body-inner\">\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.pageBody : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "					        </div>\r\n					    </div>\r\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "					            	";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.pageBody : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "					            	";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"page-inner article-container\" role=\"main\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.page : stack1), depth0))
    + "\">\r\n\r\n    	<div class=\"page-header\">\r\n    		<div class=\"page-header-inner clearfix\">\r\n\r\n    			<div class=\"page-header-content\">\r\n    				<div class=\"page-header-content-inner\">\r\n\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.displayTitle : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n    				</div>\r\n    			</div>\r\n\r\n    		</div>\r\n    	</div>\r\n\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["shadow"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"shadow\" class=\"shadow display-none\"></div>";
},"useData":true});

return this["Handlebars"];

});