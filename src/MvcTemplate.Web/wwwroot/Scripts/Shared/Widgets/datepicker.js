Datepicker = {
    init: function () {
        var lang = moment.locale(document.documentElement.lang);

        if (window.rome) {
            var dateFormat = moment().locale(lang)._locale._longDateFormat.L;

            [].forEach.call(document.querySelectorAll('.datepicker'), function (date) {
                rome(date, {
                    styles: {
                        container: 'rd-container date-container'
                    },
                    monthFormat: 'YYYY MMMM',
                    inputFormat: dateFormat,
                    dayFormat: 'D',
                    time: false
                });
            });

            [].forEach.call(document.querySelectorAll('.datetimepicker'), function (date) {
                rome(date, {
                    styles: {
                        container: 'rd-container datetime-container'
                    },
                    inputFormat: dateFormat + ' HH:mm',
                    monthFormat: 'YYYY MMMM',
                    timeInterval: 900,
                    autoClose: false,
                    dayFormat: 'D'
                });
            });
        }
    }
};
