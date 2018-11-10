# VZ URL Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## 2.1.0 - 2018-11-09

### Added

- Migrate settings from VzUrl 1.x when upgrading Craft 2 -> Craft 3.

## 2.0.0 - 2018-09-22

### Added

- Compatibility with Craft 3.
- The `craft.vzUrl.parse` variable now parses any query string into an associative array.

## 1.1.1 - 2017-04-24T14:00:00+00:00

### Fixed

- Set column-type to Text initially, rather that starting with a String and migrating.

## 1.1.0 - 2017-04-15T09:00:00+00:00

### Improved

- Refactored Javascript to check fields sequentially rather than simultaneously. On entries with a lot of URL fields, this should prevent the browser from locking up.
- Cache URL validity in the browser so multiple copies of the same URL on a page won't require multiple server calls.
- Now uses a GET rather than HEAD request to check URLs, as some servers don't respond correctly to HEAD requests.

## 1.0.5 - 2017-02-16T10:00:00+00:00

### Fixed

- Change column type to TEXT to avoid MySQL row limit.

## 1.0.4 - 2017-02-03T09:00:00+00:00

### Fixed

- Minor styling issues with URL input & redirect message.

### Improved

- Increased character limit in database to 2000 to prevent issues with longer URLs.

## 1.0.3 - 2016-07-09T12:00:00+00:00

### Fixed

- Release feed URL.

### Improved

- Made the initial regex URL check more lenient, to avoid marking weird URLs as invalid incorrectly.

## 1.0.2 - 2015-10-03T12:00:00+00:00

### Added

- VZ URL fields can now be displayed as a column in the entry index in Craft 2.5.

## 1.0.1 - 2015-07-06T12:00:00+00:00

### Improved

- Use placeholder for initial value display.
- Always mark URLs beginning with `?` or `#` as valid.
- Update PHP code to use PSR-2 style.

## 1.0.0 - 2014-12-07T12:00:00+00:00

- Initial public release
