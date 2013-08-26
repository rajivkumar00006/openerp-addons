$(document).ready(function () {
    $(".oe_website_sale input[name='shipping_different']").change(function () {
        $(".oe_website_sale .js_shipping").toggle();
    });

    $(".oe_website_sale .oe_mycart input.js_quantity").change(function () {
        var value = parseInt($(this).val());
        if (!isNaN(value)) {
            window.location.href = window.location.origin + window.location.pathname + 'set_cart/' + $(this).data('id') + '/' + value + '/';
        }
    });
    
    $payment = $(".oe_website_sale .js_payment");
    $("input[name='payment_type']", $payment).click(function (ev) {
        var payment_id = $(ev.target).val();
        $("div[data-id]", $payment).addClass("hidden");
        $("a.btn:last, div[data-id='"+payment_id+"']", $payment).removeClass("hidden");
    });
});
