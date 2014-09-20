/**
 * Created by orcwarrior on 2014-08-26.
 */
(function () {
    _.mixin({
                /**
                 * Overwrites only existing fields in target by fields in source
                 * additionally if there is any nested object as property on both objects
                 * this function is called recursivelly for it (and not just overwrite whole object)
                 * @param source
                 * @param target
                 */
                overwriteExisting: function (source, target) {
                    Object.keys(target).map(function (a) {
                        if (_.isUndefined(source) || _.isNull(source)) return;

                        if (a in source) {
                            if (_.isObject(target[a]) && _.isObject(source[a]))
                                _.overwriteExisting(source[a], target[a]);
                            else
                                target[a] = source[a];
                        }
                    });
                },
                // http://stackoverflow.com/a/6491621
                resolveByString  : function (obj, str) {
                    str = str.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
                    str = str.replace(/^\./, '');           // strip a leading dot
                    var a = str.split('.');
                    while (a.length) {
                        var n = a.shift();
                        if (n in obj) {
                            obj = obj[n];
                        } else {
                            return;
                        }
                    }
                    return obj;
                },
                setPathValue  : function (obj, str, val) {
                    str = str.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
                    str = str.replace(/^\./, '');           // strip a leading dot
                    var a = str.split('.');
                    while (a.length-1) {
                        var n = a.shift();
                        if (n in obj) {
                            obj = obj[n];
                        } else {
                            return;
                        }
                    }
                    obj[a.shift()] = val;
                }
            });

})();