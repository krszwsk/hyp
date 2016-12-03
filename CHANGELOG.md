## [0.0.7] 2016-12-03
### Added
- Offsets for grid (`o-1` to `o-12`). It has a few quirks
though, for example if you offset 2 columns and then offset
1 column, they won't be aligned perfectly because of
`margin-left` on each column element.

### Changed
- Better margin asignments in grid

## [0.0.6] 2016-12-03
### Fixed
- Grid again in `width` instead of `flex`.

## [0.0.5] 2016-11-30
### Changed
- Well that was stoopid. Changed `.cX` to `.c-X`, because we can't be too lazy.

## [0.0.4] - 2016-11-30
### Changed
- `.col-X`classes to `.cX`, because it's a framework for lazy people :T.

## [0.0.3] - 2016-11-29
### Added
- `btn-light`
- `center-vh-parent` and `center-vh` for easy centering content.
- Padding in `.container`.

### Changed
- Grid system in `flex` instead of `width` %.

### Fixed
- Gulp `@import` error.