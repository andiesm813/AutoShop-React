import { IgrButton, IgrButtonModule, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrCardMedia, IgrCardModule, IgrRipple, IgrRippleModule, IgrSelect, IgrSelectItem, IgrSelectModule } from '@infragistics/igniteui-react';
import { useNavigate } from 'react-router-dom';
import styles from './home.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrCardModule.register();
IgrRippleModule.register();
IgrSelectModule.register();

export default function Home() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();

  return (
    <>
      <div className={classes("column-layout home-container")}>
        <div className={classes("column-layout page-content")}>
          <div className={classes("row-layout main-page-header")}>
            <div className={classes("row-layout group")}>
              <div className={classes("column-layout group_1")}>
                <h4 className={classes("h4")}>
                  <span>All the auto parts you need in one place</span>
                </h4>
                <p className={classes("typography__body-1 text")}>
                  <span>We have the most popular brands and all the parts for your vehicle</span>
                </p>
                <div className={classes("row-layout group_2")}>
                  <IgrSelect outlined="false" label="Year" placeholder="Select Year" className={classes("select")}>
                    <IgrSelectItem value="Option" key="a7d03069-91bc-4278-ae46-9c26f948a9bf">
                      <span key={uuid()}>2023</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="7d15169e-3ab6-4381-87ca-0cd49123b66a">
                      <span key={uuid()}>2022</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="79f0fef7-bd82-4c21-89fd-82fff75187af">
                      <span key={uuid()}>2021</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="d5fb224e-3ee9-4a89-8c4e-f3010a306c5e">
                      <span key={uuid()}>2020</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="ac8ff38c-6543-40ea-aa3f-4e95b9a2e0f1">
                      <span key={uuid()}>2019</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="f8b6fb2d-860b-4ad7-9e0e-6f8c9b03022d">
                      <span key={uuid()}>2018</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="f1656f95-d32b-438a-83c0-a9f9f7d7048b">
                      <span key={uuid()}>2017</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="9cbbc867-5b51-4b4b-b62f-8d3c524adbfe">
                      <span key={uuid()}>2016</span>
                    </IgrSelectItem>
                  </IgrSelect>
                  <IgrSelect outlined="false" label="Brand" placeholder="Select Brand" disabled="true" className={classes("select")}>
                    <IgrSelectItem value="Option" key="00688b76-9bfc-4d3c-a976-51ae2d7c9633">
                      <span key={uuid()}>Hyundai</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="6b6ed474-f0d7-4f57-9fc3-001894db54b4">
                      <span key={uuid()}>Kia</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="9e0170b7-5272-4274-936a-de8254929c1c">
                      <span key={uuid()}>Mitsubishi</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="4caa2826-ed60-4dea-b994-0efe461c423f">
                      <span key={uuid()}>Audi</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="5716de48-0bc9-4265-88a1-915483636b3c">
                      <span key={uuid()}>Chevrolet</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="f03842a6-5134-4d80-bf8c-3d0cb7ebf5c3">
                      <span key={uuid()}>Toyota</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="30ab1ad8-c785-4250-a68d-352853dd1479">
                      <span key={uuid()}>Ford</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="07ef9b80-36c0-42a9-a7d2-7090044fc560">
                      <span key={uuid()}>Fiat</span>
                    </IgrSelectItem>
                  </IgrSelect>
                  <IgrSelect outlined="false" label="Model" placeholder="Select Model" disabled="true" className={classes("select")}>
                    <IgrSelectItem value="Option" key="e6712bac-a9a7-40a3-9b12-d2e18b8c2ed4">
                      <span key={uuid()}>Option</span>
                    </IgrSelectItem>
                  </IgrSelect>
                  <IgrSelect outlined="false" label="Engine" placeholder="Select Engine" disabled="true" className={classes("select")}>
                    <IgrSelectItem value="Option" key="4352b784-7aa3-4b23-b63b-9ff8219d5f5e">
                      <span key={uuid()}>Option</span>
                    </IgrSelectItem>
                  </IgrSelect>
                  <div className={classes("row-layout group_3")}>
                    <IgrButton variant="flat" size="large" className={classes("button button_2")}>
                      <span key={uuid()}>SEARCH</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes("column-layout content")}>
            <div className={classes("column-layout popular-categories")}>
              <h5 className={classes("h5")}>
                <span>Popular Categories</span>
              </h5>
              <div className={classes("row-layout group_4")}>
                <div style={{display: 'contents'}} onClick={() => navigate(`/all-products`)}>
                  <IgrCard className={classes("card")}>
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src="/src/assets/photo-1606577924006-27d39b132ae2.jpg" className={classes("image")} key={uuid()} />
                    </IgrCardMedia>
                    <IgrCardHeader key={uuid()}>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>AUTO BODY PARTS</span>
                      </h3>
                      <h5 slot="subtitle" key={uuid()}>
                        <span key={uuid()}>Bumpers, Fenders, Mirrors, Hoods, Grilles, Door handles, Windows</span>
                      </h5>
                    </IgrCardHeader>
                  </IgrCard>
                </div>
                <IgrCard className={classes("card")}>
                  <IgrCardMedia className={classes("media-content")} key={uuid()}>
                    <img src="/src/assets/photo-1616788494670-7243adbb32b2.jpg" className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>HEADLIGHTS &amp; LIGHTING</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>Headlights, Tail, Fog, Turn Signals, Switches, Corner, Off-Road, Bulbs</span>
                    </h5>
                  </IgrCardHeader>
                </IgrCard>
                <IgrCard className={classes("card")}>
                  <IgrCardMedia className={classes("media-content")} key={uuid()}>
                    <img src="/src/assets/photo-1552656967-7a0991a13906.jpg" className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>ENGINE &amp; DRIVETRAIN</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>Catalytic Converters, Radiators, Fuel Systems, Heating, Cranks, Pistons</span>
                    </h5>
                  </IgrCardHeader>
                </IgrCard>
                <IgrCard className={classes("card")}>
                  <IgrCardMedia className={classes("media-content")} key={uuid()}>
                    <img src="/src/assets/photo-1598149949932-e4727f2f7ac4.jpg" className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>BRAKES &amp; SUSPENSION</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>Discs, Shocks, Control Arms, Wheel Hubs, Wheels, Tie Rods</span>
                    </h5>
                  </IgrCardHeader>
                </IgrCard>
                <IgrCard className={classes("card")}>
                  <IgrCardMedia className={classes("media-content")} key={uuid()}>
                    <img src="/src/assets/photo-1614527255138-018e29ff34ee.jpg" className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>INTERIOR ACCESSORIES</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>Seats, Carpet, Floor Mats, Dashboard, Switches, Gauges &amp; Monitors</span>
                    </h5>
                  </IgrCardHeader>
                </IgrCard>
                <IgrCard className={classes("card")}>
                  <IgrCardMedia className={classes("media-content")} key={uuid()}>
                    <img src="/src/assets/photo-1514316454349-750a7fd3da3a.jpg" className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>EXTERIOR ACCESSORIES</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>Bumpers, Hoods, Grilles, Fog lights, Door Handles, Locks, Covers</span>
                    </h5>
                  </IgrCardHeader>
                </IgrCard>
              </div>
            </div>
            <div className={classes("column-layout popular-categories")}>
              <h5 className={classes("h5")}>
                <span>Featured Products</span>
              </h5>
              <div className={classes("row-layout group_5")}>
                <div style={{display: 'contents'}} onClick={() => navigate(`/product-details`)}>
                  <IgrCard className={classes("card")}>
                    <IgrCardMedia className={classes("media-content_1")} key={uuid()}>
                      <img src="/src/assets/Alternator1.jpg" className={classes("image")} key={uuid()} />
                    </IgrCardMedia>
                    <IgrCardHeader key={uuid()}>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>Gold Alternator</span>
                      </h3>
                      <h5 slot="subtitle" key={uuid()}>
                        <span key={uuid()}>This is a brief product description, not longer than 2 lines of text.</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")} key={uuid()}>
                      <h6 className={classes("h6")} key={uuid()}>
                        <span>$59.90</span>
                      </h6>
                    </IgrCardContent>
                    <IgrCardActions className={classes("actions-content")} key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrButton variant="flat" size="large" className={classes("button_1 button_1_1")}>
                          <span className={classes("material-icons icon")} key={uuid()}>
                            <span key={uuid()}>add_shopping_cart</span>
                          </span>
                          <span key={uuid()}>ADD TO CART</span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrButton>
                      </div>
                    </IgrCardActions>
                  </IgrCard>
                </div>
                <IgrCard className={classes("card")}>
                  <IgrCardMedia className={classes("media-content_1")} key={uuid()}>
                    <img src="/src/assets/Depositphotos_114068560_l-2015.jpg" className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>Winter Tires Set</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>This is a brief product description, not longer than 2 lines of text.</span>
                    </h5>
                  </IgrCardHeader>
                  <IgrCardContent className={classes("body-content")} key={uuid()}>
                    <h6 className={classes("h6")} key={uuid()}>
                      <span>$44.50</span>
                    </h6>
                  </IgrCardContent>
                  <IgrCardActions className={classes("actions-content")} key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrButton variant="flat" size="large" className={classes("button_1 button_1_2")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>add_shopping_cart</span>
                        </span>
                        <span key={uuid()}>ADD TO CART</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                    </div>
                  </IgrCardActions>
                </IgrCard>
                <IgrCard className={classes("card")}>
                  <IgrCardMedia className={classes("media-content_1")} key={uuid()}>
                    <img src="/src/assets/Depositphotos_12011807_l-2015.jpg" className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>Headlight Assembly</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>This is a brief product description, not longer than 2 lines of text.</span>
                    </h5>
                  </IgrCardHeader>
                  <IgrCardContent className={classes("body-content")} key={uuid()}>
                    <h6 className={classes("h6")} key={uuid()}>
                      <span>$49.50</span>
                    </h6>
                  </IgrCardContent>
                  <IgrCardActions className={classes("actions-content")} key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrButton variant="flat" size="large" className={classes("button_1 button_1_3")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>add_shopping_cart</span>
                        </span>
                        <span key={uuid()}>ADD TO CART</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                    </div>
                  </IgrCardActions>
                </IgrCard>
                <IgrCard className={classes("card")}>
                  <IgrCardMedia className={classes("media-content_1")} key={uuid()}>
                    <img src="/src/assets/Depositphotos_39703145_l-2015.jpg" className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>Spark Plugs</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>This is a brief product description, not longer than 2 lines of text.</span>
                    </h5>
                  </IgrCardHeader>
                  <IgrCardContent className={classes("body-content")} key={uuid()}>
                    <h6 className={classes("h6")} key={uuid()}>
                      <span>$11.00</span>
                    </h6>
                  </IgrCardContent>
                  <IgrCardActions className={classes("actions-content")} key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrButton variant="flat" size="large" className={classes("button_1 button_1_4")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>add_shopping_cart</span>
                        </span>
                        <span key={uuid()}>ADD TO CART</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                    </div>
                  </IgrCardActions>
                </IgrCard>
                <IgrCard className={classes("card")}>
                  <IgrCardMedia className={classes("media-content_1")} key={uuid()}>
                    <img src="/src/assets/Depositphotos_91150104_l-2015.jpg" className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>Tail Lamp Assembly</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>This is a brief product description, not longer than 2 lines of text.</span>
                    </h5>
                  </IgrCardHeader>
                  <IgrCardContent className={classes("body-content")} key={uuid()}>
                    <h6 className={classes("h6")} key={uuid()}>
                      <span>$19.90</span>
                    </h6>
                  </IgrCardContent>
                  <IgrCardActions className={classes("actions-content")} key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrButton variant="flat" size="large" className={classes("button_1 button_1_5")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>add_shopping_cart</span>
                        </span>
                        <span key={uuid()}>ADD TO CART</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                    </div>
                  </IgrCardActions>
                </IgrCard>
                <IgrCard className={classes("card")}>
                  <IgrCardMedia className={classes("media-content_1")} key={uuid()}>
                    <img src="/src/assets/Depositphotos_20993125_l-2015.jpg" className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>Oil Filters</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>This is a brief product description, not longer than 2 lines of text.</span>
                    </h5>
                  </IgrCardHeader>
                  <IgrCardContent className={classes("body-content")} key={uuid()}>
                    <h6 className={classes("h6")} key={uuid()}>
                      <span>$24.50</span>
                    </h6>
                  </IgrCardContent>
                  <IgrCardActions className={classes("actions-content")} key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrButton variant="flat" size="large" className={classes("button_1 button_1_6")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>add_shopping_cart</span>
                        </span>
                        <span key={uuid()}>ADD TO CART</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                    </div>
                  </IgrCardActions>
                </IgrCard>
              </div>
            </div>
          </div>
          <div className={classes("row-layout sitemap")}>
            <div className={classes("column-layout group_6")}>
              <p className={classes("typography__subtitle-2 text_1")}>
                <span>Contact Us</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>1234 Street Name, CityName, ST</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span> 10520 United States</span>
              </p>
              <p className={classes("typography__subtitle-2 text_2")}>
                <span>Phone Number</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>1-234-567-8901</span>
              </p>
            </div>
            <div className={classes("column-layout group_7")}>
              <p className={classes("typography__subtitle-2 text_1")}>
                <span>Help</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>FAQ</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Returns</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Coupons &amp; Discounts</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Shipping &amp; Returns</span>
              </p>
            </div>
            <div className={classes("column-layout group_7")}>
              <p className={classes("typography__subtitle-2 text_1")}>
                <span>About Us</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Company Info</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Press Releases</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Careers</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Reviews</span>
              </p>
            </div>
            <div className={classes("column-layout group_7")}>
              <p className={classes("typography__subtitle-2 text_1")}>
                <span>Services</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Buy Online</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>In-Store</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Repair Help</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Find a Repair Shop</span>
              </p>
            </div>
            <div className={classes("column-layout group_7")}>
              <p className={classes("typography__subtitle-2 text_1")}>
                <span>Blog</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Car Building Basics</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Do it Yourself</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Your Home Workshop</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Advanced Bulding</span>
              </p>
            </div>
          </div>
          <div className={classes("row-layout footer")}>
            <p className={classes("typography__body-2 text_3")}>
              <span>Copyright ©2021 AutoShop.com, Inc. All Rights Reserved.</span>
            </p>
            <div className={classes("row-layout group_8")}>
              <p className={classes("typography__body-2 text_4")}>
                <span>Terms of Use</span>
              </p>
              <p className={classes("typography__body-2 text_4")}>
                <span>Privacy Policy</span>
              </p>
              <p className={classes("typography__body-2 text_4")}>
                <span>Site Map</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
