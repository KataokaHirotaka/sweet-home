import CmsMain from "./_CmsMain";
import CmsPost from "./_CmsPost";
import Accordion from "./_Accordion";
import Anchor from "./_Anchor";
import Nav from "./_Nav";
import Animation from "./_Animation";
import Header from "./_Header";
import Breadcrumb from "./_Breadcrumb";
import PriceTable from "./_PriceTable";

$(() => {
  new CmsMain().init();
  new CmsPost().init();
  new Nav().init();
  new Accordion().init();
  new Anchor().init();
  new Animation().init();
  new Header().init();
  new Breadcrumb().init();
  new PriceTable().init();
});
