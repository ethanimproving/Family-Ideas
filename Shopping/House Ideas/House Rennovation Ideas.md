---
tags: clean
---


```dataview
table type
from #messy or #clean
sort rating desc
```

```page-gallery
# Any options given at the root level of the configuration
# will be used as defaults for all views (but can be overridden
# in any individual view).
fields: [title]
columns: 3
orientation: landscape

# If you don't include an explicit `views` option (which needs
# to be an array), then page-gallery will just use all the root
# level options as a single unnamed view.
views:
  - name: Clean
    table: image
    from: '#clean'
  - name: Messy
    from: '#messy'
```



# Paint the Brick White

title:: Paint the Brick White
![](https://photos.zillowstatic.com/fp/ea3c3f8b3c44449213b93cd372e18166-cc_ft_1536.webp)

# Warm wooden floor for living room and hallways

title:: Warm wooden floor for living room and hallways
![](https://photos.zillowstatic.com/fp/8cc809bef012f9c72302b02ac6c6a302-uncropped_scaled_within_1536_1152.webp)

# White cabinets

![](https://photos.zillowstatic.com/fp/23d212cd66709b29824d6bc2c8d58f49-uncropped_scaled_within_1536_1152.webp)
