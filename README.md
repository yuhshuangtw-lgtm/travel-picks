# Travel Picks

My recommended places for friends visiting, by city.

Live site: https://yuhshuangtw-lgtm.github.io/travel-picks/
Link to one city: https://yuhshuangtw-lgtm.github.io/travel-picks/#taipei

## Editing

All content lives in `data.js`. `index.html` doesn't need changes.

- **Add a place**: add an entry to that city's `places` list.
  - `cat`: one category id (`food`, `sweet`, `market`, `sight`, `hike`, `spring`)
  - `tags`: any tags from that city's `tags` lists
  - `map`: `M("<Google place_id>")` or `Q("<search text>")`
- **Add a city**: copy the whole Taipei block in `cities`, change `id`, `name`, `zh`, `intro`, `blurbs`, `tags` and `places`. The city switcher appears once there are two or more cities.
- **Add a category**: add it to `categories`. Cities only show categories they have places in.
