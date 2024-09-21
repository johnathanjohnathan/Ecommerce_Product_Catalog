import { mount } from "@vue/test-utils";
import ProductUnavailable from "../src/components/ProductUnavailable.vue";

describe("ProductUnavailable", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ProductUnavailable);
  });

  it("renders unavailable message", () => {
    expect(wrapper.find(".notfound-message").text()).toBe(
      "This product is unavailable to show",
    );
  });

  it("emits next event when next button is clicked", async () => {
    await wrapper.find(".next-product").trigger("click");
    expect(wrapper.emitted().next).toBeTruthy();
  });
});
