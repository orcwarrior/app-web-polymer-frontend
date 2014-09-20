/**
 * Created by orcwarrior on 2014-09-20.
 */


(function () {
    var domain = {
        /* Message */
        /* Request */
        RESTRequest       : function (RESTRequestHeaders, content) {
            this.headers = RESTRequestHeaders;
            this.content = content;
        },
        RESTRequestHeaders: function (RESTOperation, session) {
            this.operation = RESTOperation;
            this.session = session;
        },
        /* Response */
        RESTResponse      : function (RESTResponseHeaders, content) {
            this.headers = RESTResponseHeaders;
            this.content = content;
        },
        RESTResponseHeaders : function(RESTResponseStatus, session) {
            this.status = RESTResponseStatus;
            this.session = session;
        },
        RESTResponseStatus : function(type, message) {
            this.type = type;
            this.message = message;
        },
        /* Entity objects */
        session           : function (uuid, user, created) {
            this.uuid = uuid;
            this.user = user;
            this.created = created;
        },
        user              : function (id, username, password, email, userRoles, enabled) {
            this.id = id;
            this.username = username;
            this.password = password;
            this.email = email;
            this.userRoles = userRoles;
            this.enabled = enabled;
        },
        userRoles         : function (arrRoles) {
            this.roles = arrUserRoles;
        },
        /* 'enums' values */
        RESTRequestOperation : [
            'RESTOperation.login',
            'RESTOperation.logout',
            'RESTOperation.register',
            'RESTOperation.getRoles',
            'RESTOperation.getArticles',
            'RESTOperation.getArticleFull',
            'RESTOperation.getArticleComments',
            'RESTOperation.favoriteArticle',
            'RESTOperation.editArticle',
            'RESTOperation.deleteArticle',
            'RESTOperation.createArticle',
            'RESTOperation.addComment',
            'RESTOperation.deleteComment'
        ],
        RESTResponseStatusType : [
            'RESTResponseStatusType.success',
            'RESTResponseStatusType.fail'
        ]
    };
    _.extend(septEngine.domain, domain);
}
    )
(
);