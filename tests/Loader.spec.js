import { mount } from "@vue/test-utils";
import Loader from "../src/components/Loader.vue";

describe("Loader", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Loader);
  });

  it("renders loading skeleton", () => {
    expect(wrapper.find(".skeleton-container").exists()).toBe(true);
  });
});
