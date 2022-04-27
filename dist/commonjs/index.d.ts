export declare enum ISO8601DateFormat {
    /**
     * The ISO 8601 Basic date format, `YYYYMMDD` (e.g. `20230101`)
     */
    Basic = 0,
    /**
     * The ISO 8601 Extended date format, `YYYY-MM-DD` (e.g. `2023-01-01`)
     */
    Extended = 1
}
/**
 * Presents the supplied JavaScript `Date` as a date string in ISO 8601 format,
 * using the local time, rather than UTC. Defaults to the Extended date format
 * (`YYYY-MM-DD`).
 *
 * @param date the date to present
 * @param format the ISO 8601 format to use for presentation, defaulting to
 *               Extended format. See <https://www.loc.gov/standards/datetime/iso-tc154-wg5_n0038_iso_wd_8601-1_2016-02-16.pdf>.
 */
export declare const dateToISO8601String: (date: Date, format?: ISO8601DateFormat) => string;
