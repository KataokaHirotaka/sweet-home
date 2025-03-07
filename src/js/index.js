import Accordion from "./_Accordion";
import Anchor from "./_Anchor";
import Nav from "./_Nav";
import Animation from "./_Animation";
import Header from "./_Header";

$(() => {
  new Nav().init();
  new Accordion().init();
  new Anchor().init();
  new Animation().init();
  new Header().init();
});
