odoo.define("oepetstore.petstore", function(require){
    'use strict';

    var AbstractAction = require('web.AbstractAction');
    var core = require('web.core');
    const _t = core._t;
    var QWeb = core.qweb;
    var Widget = require('web.Widget');

    var HomePageClientAction =  AbstractAction.extend({
        className: 'oe_petstore_homepage',
        start: function() {
            this.$el.append('<div>Hello dear Odoo user!</div>');
            var greeting = new GreetingsWidget(this);
            greeting.appendTo(this.$el);
        },
    });

    var GreetingsWidget = Widget.extend({
        className: 'oe_petstore_greetings',
        start: function() {
            this.$el.append('<div>We are so happy to see you again in this menu!</div>');
        },
    });

    core.action_registry.add('petstore_homepage', HomePageClientAction);
});
