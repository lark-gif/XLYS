var t = getApp(), s = t.requirejs("core");

Page({
    data: {
      bhstatus: 1,
      gs: '曹操送',
      orderid: 0,
    },
    onLoad: function(s) {
        this.setData({
            options: s
        }), t.url(s), this.get_list();
    },
    get_list: function() {
        var t = this;
        s.get("order/express", t.data.options, function(e) {
            t.setData({
              bhstatus: e.snstatus,
              gs: e.gs,
              orderid: e.orderid
            })
            console.log(e);
            0 == e.error ? (e.show = !0, t.setData(e)) : s.toast(e.message, "loading");
        });
    }
});