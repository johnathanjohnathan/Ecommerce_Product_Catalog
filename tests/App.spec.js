import { mount } from "@vue/test-utils";
import AppComponent from "../src/App.vue";
import Loader from "../src/components/Loader.vue";
import ProductDisplay from "../src/components/ProductDisplay.vue";
import ProductUnavailable from "../src/components/ProductUnavailable.vue";

describe("AppComponent", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(AppComponent);
  });

  it("renders Loader when isLoading is true", async () => {
    wrapper.vm.isLoading.value = true;
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(Loader).exists()).toBe(true);
  });

  it("renders ProductDisplay when a valid product is fetched", async () => {
    wrapper.vm.state.product = {
      name: "Test Product",
      category: "men's clothing",
      rating: { rate: 4, count: 10 },
      description: "Description here",
      image: "image.jpg",
      price: "29.99",
    };

    wrapper.vm.isLoading.value = false;

    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(ProductDisplay).exists()).toBe(true);
  });

  it("renders ProductUnavailable when product category is empty", async () => {
    wrapper.vm.state.product.category = "";

    wrapper.vm.isLoading.value = false;

    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(ProductUnavailable).exists()).toBe(true);
  });

  it("fetches next product correctly", async () => {
    const initialIndex = wrapper.vm.state.currentIndex;
    await wrapper.vm.nextProduct();

    expect(wrapper.vm.state.currentIndex).toBe(
      initialIndex < 20 ? initialIndex + 1 : 1,
    );
  });
});
