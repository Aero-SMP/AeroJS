// AeroExpansion Items added to the Registry
StartupEvents.registry('item', event => {
    event.create('aeroexpansion:raw_shrimp').displayName('Raw Shrimp').parentModel('minecraft:item/tropical_fish').food(f => f.nutrition(2).saturation(0.7).eatSeconds(0.8))
    event.create('aeroexpansion:cooked_shrimp').displayName('Cooked Shrimp').parentModel('minecraft:item/tropical_fish').food(f => f.nutrition(6).saturation(1.2).eatSeconds(1.6))
})
