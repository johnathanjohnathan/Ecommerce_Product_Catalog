import { mount } from "@vue/test-utils";
import ProductDisplay from "../src/components/ProductDisplay.vue";

describe("ProductDisplay", () => {
  let wrapper;
  const productMock = {
    title: "Test Product",
    category: "men's clothing",
    rating: { rate: 4, count: 10 },
    description: "Description here",
    image: "image.jpg",
    price: "29.99",
  };

  beforeEach(() => {
    wrapper = mount(ProductDisplay, {
      props: { product: productMock },
    });
  });

  it("renders product details correctly", () => {
    expect(wrapper.find(".product-name").text()).toBe(productMock.title);
    expect(wrapper.find(".subcategory").text()).toBe(productMock.category);
    expect(wrapper.find(".product-description").text()).toBe(
      productMock.description,
    );
    expect(wrapper.find(".price").text()).toBe(`$${productMock.price}`);
  });

  it("emits next event when next button is clicked", async () => {
    await wrapper.find(".next-button").trigger("click");
    expect(wrapper.emitted().next).toBeTruthy();
  });
});
