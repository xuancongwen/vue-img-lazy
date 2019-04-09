import "bdd-lazy-var/global";
import { mount } from "@vue/test-utils";
import ImgLazy from "../../src/ImgLazy";

describe("ImgLazy", () => {
  def('extraAttrs', () => ({}));

  subject(() =>
    mount(ImgLazy, {
      context: {
        attrs: $extraAttrs,
        props: {
          src: "http://test.host/myimg.jpg",
          srcset:
            "http://test.host/myimg.jpg http://test.host/myimg_big.jpg x2",
          sizes: "1 2 3",
          alt: "super cool pictures",
          width: "100",
          height: "100",
        }
      }
    })
  );

  it("renders this, and you changed it on purpose if it did not", () => {
    expect($subject).toMatchSnapshot(`html`);
  });

  it("should set a Vue key composed of the props so that Vue knows not to recycle this node if props change", () => {
    expect($subject.rootNode.key).toMatchInlineSnapshot(
      `"http://test.host/myimg.jpg,http://test.host/myimg.jpg http://test.host/myimg_big.jpg x2,1 2 3,super cool pictures,100,100"`
    );
  });

  describe('with crossorigin attribute', function () {
    def('extraAttrs', () => ({
      crossorigin: 'anonymous',
    }));

    it("adds crossorigin attribute", () => {
      expect($subject.element.getAttribute('crossorigin')).toEqual('anonymous');
    });
  });
});
