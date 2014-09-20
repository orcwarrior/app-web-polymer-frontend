/**
 * Created by orcwarrior on 2014-09-20.
 */

(function () {
    var requestHelper = {
        /* Message */
        /* Request */
        'RESTOperation.login' : {
            processRequestModel: function (model) {
                if (typeof model.password !== 'undefined') {
                    model.password = CryptoJS.MD5(model.password).toString();
                }
                return model;
            },
            initModel          : function () {
                return new septEngine.domain.user();
            }
        }
    };
    _.extend(septEngine.requestHelper, requestHelper);
}
    )
(
);