# Custom Components

Custom ReactJS components used by Local PK.

[Custom components](https://using-remark.gatsbyjs.org/custom-components/) are basically ReactJS components. These are used here to produce custom UI elements from user generated contents that otherwise are not so straightforward to produce and sometime impossible. There are few things that need to be made sure when using these components:

- The value for all attributes are type string
- closing tag must be provided e.g. `<my-component />` is not allowed

Here is the list of Custom Components available for Local PK content:

### `<featured-numbers>`

_Attributes_

| Name | Value            |
| ---- | ---------------- |
| data | stringified JSON |

This component is used to display numbers prominently. A description is required against each number in the data.

_Example_

```
<featured-numbers data='[
  {"numbers":"342", "description": "Total number of members"},
  {"numbers":"272", "description": "Directly elected members"}
]'
></featured-numbers>
```

Above code example renders following:

![image](https://user-images.githubusercontent.com/2131246/51764207-7e8b8200-20cc-11e9-8199-df07caf2b023.png)

---

# License

MIT License

&copy; 2019 local.com.pk
