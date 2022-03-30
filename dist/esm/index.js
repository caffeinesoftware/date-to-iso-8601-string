export var ISO8601DateFormat;
(function (ISO8601DateFormat) {
    /**
     * ISO 8601's Basic date format, `YYYYMMDD` (e.g. `20230101`)
     */
    ISO8601DateFormat[ISO8601DateFormat["Basic"] = 0] = "Basic";
    /**
     * ISO 8601's Extended date format, `YYYY-MM-DD` (e.g. `2023-01-01` )
     */
    ISO8601DateFormat[ISO8601DateFormat["Extended"] = 1] = "Extended";
})(ISO8601DateFormat || (ISO8601DateFormat = {}));
/**
 * Presents the supplied JavaScript `Date` as a string in ISO 8601 format.
 * @param date the date to present
 * @param format the ISO 8601 format to use for presentation; defaults to
 *               Extended format. See <https://www.loc.gov/standards/datetime/iso-tc154-wg5_n0038_iso_wd_8601-1_2016-02-16.pdf>.
 */
export const dateToISO8601String = (date, format = ISO8601DateFormat.Extended) => {
    switch (format) {
        case ISO8601DateFormat.Basic:
            return date.toISOString().split('T')[0].replace(/-/g, '');
        case ISO8601DateFormat.Extended:
            return date.toISOString().split('T')[0];
    }
};
