sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",  //define both modules
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.wt.controller.App", {
        //the onInit is similar to the constructor method
        onInit : function () {
            // set data model on view
            var oData = {
                recipient : {
                    name : "World"
                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },
        onShowHello : function () { //on the button click, say Hello
            MessageToast.show("Hello");
        }
    });
});