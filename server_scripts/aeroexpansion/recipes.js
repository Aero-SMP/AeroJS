// AeroExpansion Recipes
ServerEvents.generateData('after_mods', event => {
    event.json('kubejsstudio:recipe/campfire/cooked_shrimp', {"type":"minecraft:campfire_cooking","category":"food","ingredient":{"item":"aeroexpansion:raw_shrimp"},"result":{"id":"aeroexpansion:cooked_shrimp"},"experience":0.0,"cookingtime":450})
    event.json('kubejsstudio:recipe/furnace/cooked_shrimp', {"type":"minecraft:smelting","category":"food","ingredient":{"item":"aeroexpansion:raw_shrimp"},"result":{"id":"aeroexpansion:cooked_shrimp"},"experience":0.6,"cookingtime":150})
    event.json('kubejsstudio:recipe/smoker/cooked_shrimp', {"type":"minecraft:smoking","category":"food","ingredient":{"item":"aeroexpansion:raw_shrimp"},"result":{"id":"aeroexpansion:cooked_shrimp"},"experience":0.6,"cookingtime":70})
})
