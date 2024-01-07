<template>
    <div>
        <table id="items">
            <thead>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Stock</th>
                <th>Unit price</th>
            </tr>
            </thead>
            <tbody>
            <!-- When new items are added, this template node is cloned below -->
            <tr id="item-template" hidden>
                <td>
                    <select class="item-product">
                        <option>a</option>
                        <option>b</option>
                        <option>c</option>
                        <option>d</option>
                        <option>e</option>
                    </select>
                </td>
                <td>
                    <input class="item-quantity" type="number">
                </td>
                <td>
                    <input class="item-stock" type="number">
                </td>
                <td>
                    <input class="item-price" type="number">
                </td>
                <td>
                    <button class="item-up">↑</button>
                    <button class="item-down">↓</button>
                    <button class="item-delete">×</button>
                </td>
            </tr>
            </tbody>
        </table>
        <div>
            <v-btn id="add-item">Add Item</v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductsView",
    }
</script>

<style scoped>

</style>