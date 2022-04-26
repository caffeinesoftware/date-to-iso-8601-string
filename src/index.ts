export enum ISO8601DateFormat {
  /**
   * The ISO 8601 Basic date format, `YYYYMMDD` (e.g. `20230101`)
   */
  Basic,
  /**
   * The ISO 8601 Extended date format, `YYYY-MM-DD` (e.g. `2023-01-01`)
   */
  Extended,
}

/**
 * Presents the supplied JavaScript `Date` as a string in ISO 8601 format,
 * defaulting to the Extended date format (`YYYY-MM-DD`).
 *
 * @param date the date to present
 * @param format the ISO 8601 format to use for presentation, defaulting to
 *               Extended format. See <https://www.loc.gov/standards/datetime/iso-tc154-wg5_n0038_iso_wd_8601-1_2016-02-16.pdf>.
 */
export const dateToISO8601String = (
  date: Date,
  format: ISO8601DateFormat = ISO8601DateFormat.Extended,
): string => {
  switch (format) {
    case ISO8601DateFormat.Basic:
      return date.toISOString().split('T')[0].replace(/-/g, '');
    case ISO8601DateFormat.Extended:
      return date.toISOString().split('T')[0];
  }
};
