@extends('index')
@section('contain')
    <section class="c-sention c-section--top" data-j-class="MoreContents">
        <h1 class="c-section__heading">Plan</h1>

        <div class="p-search-plan p-search-plan--horizontal" data-j-class="SearchPlanHorizontal">
            <div class="p-search-plan__item p-search-by-key p-search-by-key--horizontal">
                <h3 class="p-search-by-key__title">Area</h3>
                <ul class="p-search-by-key__items">
                    <li class="p-search-by-key__item "><a href="index0567.html?area=tokyo">Tokyo</a></li>
                    <li class="p-search-by-key__item "><a href="indexeaaa.html?area=yokohama">Yokohama</a></li>
                    <li class="p-search-by-key__item "><a href="index47d3.html?area=mt-fuji">Mt. Fuji</a></li>
                    <li class="p-search-by-key__item "><a href="indexadd6.html?area=nagoya">Nagoya</a></li>
                    <li class="p-search-by-key__item "><a href="index00d8.html?area=kyoto">Kyoto</a></li>
                    <li class="p-search-by-key__item "><a href="index6ea4.html?area=nara">Nara</a></li>
                    <li class="p-search-by-key__item "><a href="index0656.html?area=osaka">Osaka</a></li>
                    <li class="p-search-by-key__item "><a href="index65dc.html?area=kobe">Kobe</a></li>
                    <li class="p-search-by-key__item "><a href="index024c.html?area=fukuoka">Fukuoka</a></li>
                    <li class="p-search-by-key__item "><a href="index07c4.html?area=okinawa">Okinawa</a></li>
                </ul>
            </div>
            <div class="p-search-plan__item p-search-by-key p-search-by-key--horizontal">
                <h3 class="p-search-by-key__title">Keyword</h3>
                <ul class="p-search-by-key__items">
                    <li class="p-search-by-key__item "><a href="keyword/spring/index.html">Spring</a></li>
                    <li class="p-search-by-key__item "><a href="keyword/summer/index.html">Summer</a></li>
                    <li class="p-search-by-key__item "><a href="keyword/autumn/index.html">Autumn</a></li>
                    <li class="p-search-by-key__item "><a href="keyword/winter/index.html">Winter</a></li>
                    <li class="p-search-by-key__item "><a href="keyword/sakura/index.html">Sakura</a></li>
                    <li class="p-search-by-key__item "><a href="keyword/autumn-leaves/index.html">Autumn Leaves</a></li>
                    <li class="p-search-by-key__item "><a href="keyword/greenery/index.html">Greenery</a></li>
                    <li class="p-search-by-key__item "><a href="keyword/flower/index.html">Flower</a></li>
                    <li class="p-search-by-key__item "><a href="keyword/beach/index.html">Beach</a></li>
                    <li class="p-search-by-key__item "><a href="keyword/templeshrine/index.html">Temple/Shrine</a></li>
                    <li class="p-search-by-key__item "><a href="keyword/japanese-castle/index.html">Japanese Castle</a>
                    </li>
                    <li class="p-search-by-key__item "><a href="keyword/japanese-garden/index.html">Japanese Garden</a>
                    </li>
                    <li class="p-search-by-key__item "><a href="keyword/city/index.html">City</a></li>
                    <li class="p-search-by-key__item "><a href="keyword/kimono/index.html">Kimono</a></li>
                    <li class="p-search-by-key__item "><a href="keyword/dresstuxedo/index.html">Dress/Tuxedo</a></li>
                    <li class="p-search-by-key__item "><a href="keyword/night-view/index.html">Night View</a></li>
                </ul>
            </div>
        </div>

        <div class="p-plans-wrap" data-j-selector="contents" data-j-next-url="/plans/?page=2">
            <div class="p-plans p-plans--top c-columns " data-j-selector="content">
                <div class="p-plans__item c-column--three">
                    <a class="p-plan " href="{{ url('detail') }}">
                        <div class="p-plan__photo">
                            <div class="p-plan__photo__content">
                                {{ Html::image('public/images/albums/fuji-4-everything-is-alright/img04-60.jpg', 'DE & Co. Decollte Wedding Photography in Japan. A Japanese Wedding Photo Studio. | 德可莉日本專業婚紗攝影 | Mt. Fuji | 富士山 | Everything is Alright',array('width'=>650,'height'=>410)) }}
                            </div>
                        </div>
                        <div class="p-plan__box">
                            <div class="p-plan__box__inner">
                                <h4 class="p-plan__box__title">Everything is Alright</h4>
                                <p class="p-plan__box__description">Mt. Fuji, the majestic symbol of Japan, is
                                    absolutely
                                    sensible choice if you are...</p>
                                <div class="p-plan__box__btn"><p class="c-btn">VIEW DETAILS</p></div>
                            </div>
                        </div>
                    </a></div>
                <div class="p-plans__item c-column--three">
                    <a class="p-plan " href="kyoto-03-sakura-romance/index.html">
                        <div class="p-plan__photo">
                            <div class="p-plan__photo__content">
                                {{ Html::image('public/images/albums/kyoto-03-sakura-romance/img03-75.jpg', 'DE & Co. Decollte Wedding Photography in Japan. A Japanese Wedding Photo Studio. | 德可莉日本專業婚紗攝影 | Kyoto | 京都 | Sakura Romance | 櫻花。絢爛',array('width'=>650,'height'=>410)) }}
                            </div>
                        </div>
                        <div class="p-plan__box">
                            <div class="p-plan__box__inner">
                                <h4 class="p-plan__box__title">Sakura Romance</h4>
                                <p class="p-plan__box__description">Kyoto&#8217;s most popular spots for cherry blossom
                                    viewing in Japan. The cherry...</p>
                                <div class="p-plan__box__btn"><p class="c-btn">VIEW DETAILS</p></div>
                            </div>
                        </div>
                    </a></div>
                <div class="p-plans__item c-column--three">
                    <a class="p-plan " href="kobe-01-the-cinema/index.html">
                        <div class="p-plan__photo">
                            <div class="p-plan__photo__content">
                                {{ Html::image('public/images/albums/kobe-01-the-cinema/img01-81.jpg', 'DE & Co. Decollte Wedding Photography in Japan. A Japanese Wedding Photo Studio. | 德可莉日本專業婚紗攝影 | Kobe | 神戶 | The Cinema | 愛。電影',array('width'=>650,'height'=>410)) }}
                            </div>
                        </div>
                        <div class="p-plan__box">
                            <div class="p-plan__box__inner">
                                <h4 class="p-plan__box__title">The Cinema</h4>
                                <p class="p-plan__box__description">Would you like to make your photos like scenes from
                                    a
                                    romantic film? Would you l...</p>
                                <div class="p-plan__box__btn"><p class="c-btn">VIEW DETAILS</p></div>
                            </div>
                        </div>
                    </a></div>
            </div>
            <div class="p-plans p-plans--top c-columns " data-j-selector="content">
                <div class="p-plans__item c-column--three">
                    <a class="p-plan " href="kyoto-08/index.html">
                        <div class="p-plan__photo">
                            <div class="p-plan__photo__content">
                                {{ Html::image('public/images/albums/kyoto-08/fc6927a4cd7fc6f068de9eb5d3ae4aff-5.jpg', 'サムネイル',array('width'=>650,'height'=>410)) }}
                            </div>
                        </div>
                        <div class="p-plan__box">
                            <div class="p-plan__box__inner">
                                <h4 class="p-plan__box__title">From Long Time Ago</h4>
                                <p class="p-plan__box__description">Zuishin-in temple that has over a thousand years of
                                    history is related with one ...</p>
                                <div class="p-plan__box__btn"><p class="c-btn">VIEW DETAILS</p></div>
                            </div>
                        </div>
                    </a></div>
                <div class="p-plans__item c-column--three">
                    <a class="p-plan " href="okinawa-01-sup-board-x-wedding-photo/index.html">
                        <div class="p-plan__photo">
                            <div class="p-plan__photo__content">
                                {{ Html::image('public/images/albums/okinawa-01-sup-board-x-wedding-photo/650-410_mini-2.jpg', '',array('width'=>650,'height'=>410)) }}
                                </div>
                        </div>
                        <div class="p-plan__box">
                            <div class="p-plan__box__inner">
                                <h4 class="p-plan__box__title">Sup Board x Wedding Photo</h4>
                                <p class="p-plan__box__description">Have you imagined to get into the beautiful sea with
                                    Sup
                                    Board in a wedding dres...</p>
                                <div class="p-plan__box__btn"><p class="c-btn">VIEW DETAILS</p></div>
                            </div>
                        </div>
                    </a></div>
                <div class="p-plans__item c-column--three">
                    <a class="p-plan " href="okinawa-02-our-love-story/index.html">
                        <div class="p-plan__photo">
                            <div class="p-plan__photo__content">
                                {{ Html::image('public/images/albums/okinawa-02-our-love-story/img03-81.jpg', 'DE & Co. Decollte Wedding Photography in Japan. A Japanese Wedding Photo Studio. | 德可莉日本專業婚紗攝影 | Okinawa | 沖繩 | Our Love Story | 專屬愛情故事',array('width'=>650,'height'=>410)) }}
                            </div>
                        </div>
                        <div class="p-plan__box">
                            <div class="p-plan__box__inner">
                                <h4 class="p-plan__box__title">Our Love Story</h4>
                                <p class="p-plan__box__description">If you want a wedding photo shoot different with
                                    other
                                    cuples, Valley of Gangala...</p>
                                <div class="p-plan__box__btn"><p class="c-btn">VIEW DETAILS</p></div>
                            </div>
                        </div>
                    </a></div>
            </div>
            <div class="p-plans p-plans--top c-columns " data-j-selector="content">
                <div class="p-plans__item c-column--three">
                    <a class="p-plan " href="kobe-04-flower-x-flower-x-flower/index.html">
                        <div class="p-plan__photo">
                            <div class="p-plan__photo__content">
                                {{ Html::image('public/images/albums/okinawa-02-our-love-story/img03-81.jpg', 'DE & Co. Decollte Wedding Photography in Japan. A Japanese Wedding Photo Studio. | 德可莉日本專業婚紗攝影 | Okinawa | 沖繩 | Our Love Story | 專屬愛情故事',array('width'=>650,'height'=>410)) }}
                            </div>
                        </div>
                        <div class="p-plan__box">
                            <div class="p-plan__box__inner">
                                <h4 class="p-plan__box__title">Flower × Flower × Flower!</h4>
                                <p class="p-plan__box__description">Have you ever dreamed of being surrounded by a full
                                    of
                                    flowers in a field? This ...</p>
                                <div class="p-plan__box__btn"><p class="c-btn">VIEW DETAILS</p></div>
                            </div>
                        </div>
                    </a></div>
                <div class="p-plans__item c-column--three">
                    <a class="p-plan " href="fukuoka-03-grow-old-with-you/index.html">
                        <div class="p-plan__photo">
                            <div class="p-plan__photo__content">
                                {{ Html::image('public/images/albums/okinawa-02-our-love-story/img03-81.jpg', 'DE & Co. Decollte Wedding Photography in Japan. A Japanese Wedding Photo Studio. | 德可莉日本專業婚紗攝影 | Okinawa | 沖繩 | Our Love Story | 專屬愛情故事',array('width'=>650,'height'=>410)) }}
                            </div>
                        </div>
                        <div class="p-plan__box">
                            <div class="p-plan__box__inner">
                                <h4 class="p-plan__box__title">Grow old with you</h4>
                                <p class="p-plan__box__description">Great combination of WA and You (west) styles.
                                    Growing
                                    autumn leaves and your ...</p>
                                <div class="p-plan__box__btn"><p class="c-btn">VIEW DETAILS</p></div>
                            </div>
                        </div>
                    </a></div>
                <div class="p-plans__item c-column--three">
                    <a class="p-plan " href="tokyo-03-visiting-old-learn-new/index.html">
                        <div class="p-plan__photo">
                            <div class="p-plan__photo__content">
                                {{ Html::image('public/images/albums/okinawa-02-our-love-story/img03-81.jpg', 'DE & Co. Decollte Wedding Photography in Japan. A Japanese Wedding Photo Studio. | 德可莉日本專業婚紗攝影 | Okinawa | 沖繩 | Our Love Story | 專屬愛情故事',array('width'=>650,'height'=>410)) }}
                            </div>
                        </div>
                        <div class="p-plan__box">
                            <div class="p-plan__box__inner">
                                <h4 class="p-plan__box__title">Visiting old, learn new </h4>
                                <p class="p-plan__box__description">Asakusa is one of the most traditional Japanese
                                    sightseeing spot where lots of t...</p>
                                <div class="p-plan__box__btn"><p class="c-btn">VIEW DETAILS</p></div>
                            </div>
                        </div>
                    </a></div>
            </div>
            <div class="p-plans p-plans--top c-columns " data-j-selector="content">
                <div class="p-plans__item c-column--three">
                    <a class="p-plan " href="tokyo-12-back-in-days/index.html">
                        <div class="p-plan__photo">
                            <div class="p-plan__photo__content">
                                {{ Html::image('public/images/albums/okinawa-02-our-love-story/img03-81.jpg', 'DE & Co. Decollte Wedding Photography in Japan. A Japanese Wedding Photo Studio. | 德可莉日本專業婚紗攝影 | Okinawa | 沖繩 | Our Love Story | 專屬愛情故事',array('width'=>650,'height'=>410)) }}
                            </div>
                        </div>
                        <div class="p-plan__box">
                            <div class="p-plan__box__inner">
                                <h4 class="p-plan__box__title">Back in Days</h4>
                                <p class="p-plan__box__description">Keep your marriage anniversary and travel memories
                                    in
                                    Japan in unique way which ...</p>
                                <div class="p-plan__box__btn"><p class="c-btn">VIEW DETAILS</p></div>
                            </div>
                        </div>
                    </a></div>
                <div class="p-plans__item c-column--three">
                    <a class="p-plan " href="okinawa-03-vow-of-love/index.html">
                        <div class="p-plan__photo">
                            <div class="p-plan__photo__content">
                                {{ Html::image('public/images/albums/okinawa-02-our-love-story/img03-81.jpg', 'DE & Co. Decollte Wedding Photography in Japan. A Japanese Wedding Photo Studio. | 德可莉日本專業婚紗攝影 | Okinawa | 沖繩 | Our Love Story | 專屬愛情故事',array('width'=>650,'height'=>410)) }}
                            </div>
                        </div>
                        <div class="p-plan__box">
                            <div class="p-plan__box__inner">
                                <h4 class="p-plan__box__title">Vow of Love</h4>
                                <p class="p-plan__box__description">Every girl dreams of wedding at the chapel. The blue
                                    sea
                                    spread out below from t...</p>
                                <div class="p-plan__box__btn"><p class="c-btn">VIEW DETAILS</p></div>
                            </div>
                        </div>
                    </a></div>
                <div class="p-plans__item c-column--three">
                    <a class="p-plan " href="tokyo-8/index.html">
                        <div class="p-plan__photo">
                            <div class="p-plan__photo__content">
                                {{ Html::image('public/images/albums/okinawa-02-our-love-story/img03-81.jpg', 'DE & Co. Decollte Wedding Photography in Japan. A Japanese Wedding Photo Studio. | 德可莉日本專業婚紗攝影 | Okinawa | 沖繩 | Our Love Story | 專屬愛情故事',array('width'=>650,'height'=>410)) }}
                            </div>
                        </div>
                        <div class="p-plan__box">
                            <div class="p-plan__box__inner">
                                <h4 class="p-plan__box__title">Fall in Love with You Again</h4>
                                <p class="p-plan__box__description">Even if you already have been had many opportunities
                                    to
                                    spend time with your bel...</p>
                                <div class="p-plan__box__btn"><p class="c-btn">VIEW DETAILS</p></div>
                            </div>
                        </div>
                    </a></div>
            </div>
            <div class="p-plans p-plans--top c-columns " data-j-selector="content">
                <div class="p-plans__item c-column--three">
                    <a class="p-plan " href="yokohama-01-take-your-breath-away/index.html">
                        <div class="p-plan__photo">
                            <div class="p-plan__photo__content">
                                {{ Html::image('public/images/albums/okinawa-02-our-love-story/img03-81.jpg', 'DE & Co. Decollte Wedding Photography in Japan. A Japanese Wedding Photo Studio. | 德可莉日本專業婚紗攝影 | Okinawa | 沖繩 | Our Love Story | 專屬愛情故事',array('width'=>650,'height'=>410)) }}
                            </div>
                        </div>
                        <div class="p-plan__box">
                            <div class="p-plan__box__inner">
                                <h4 class="p-plan__box__title">Take your breath away</h4>
                                <p class="p-plan__box__description">Put on the finest kimono to have marvellous photo
                                    shoot
                                    at one of the most popul...</p>
                                <div class="p-plan__box__btn"><p class="c-btn">VIEW DETAILS</p></div>
                            </div>
                        </div>
                    </a></div>
                <div class="p-plans__item c-column--three">
                    <a class="p-plan " href="fukuoka-04-our-sweet-moment/index.html">
                        <div class="p-plan__photo">
                            <div class="p-plan__photo__content">
                                {{ Html::image('public/images/albums/okinawa-02-our-love-story/img03-81.jpg', 'DE & Co. Decollte Wedding Photography in Japan. A Japanese Wedding Photo Studio. | 德可莉日本專業婚紗攝影 | Okinawa | 沖繩 | Our Love Story | 專屬愛情故事',array('width'=>650,'height'=>410)) }}
                            </div>
                        </div>
                        <div class="p-plan__box">
                            <div class="p-plan__box__inner">
                                <h4 class="p-plan__box__title">Our Sweet Moment </h4>
                                <p class="p-plan__box__description">Do you remember the first time that you met? Walking
                                    on
                                    the path around the pond...</p>
                                <div class="p-plan__box__btn"><p class="c-btn">VIEW DETAILS</p></div>
                            </div>
                        </div>
                    </a></div>
                <div class="p-plans__item c-column--three">
                    <a class="p-plan " href="kobe-06/index.html">
                        <div class="p-plan__photo">
                            <div class="p-plan__photo__content">
                                {{ Html::image('public/images/albums/okinawa-02-our-love-story/img03-81.jpg', 'DE & Co. Decollte Wedding Photography in Japan. A Japanese Wedding Photo Studio. | 德可莉日本專業婚紗攝影 | Okinawa | 沖繩 | Our Love Story | 專屬愛情故事',array('width'=>650,'height'=>410)) }}
                            </div>
                        </div>
                        <div class="p-plan__box">
                            <div class="p-plan__box__inner">
                                <h4 class="p-plan__box__title">Roaming in Kobe</h4>
                                <p class="p-plan__box__description">Having a pre wedding photo shoot as a romantic date
                                    is a
                                    good idea. Kobe is defi...</p>
                                <div class="p-plan__box__btn"><p class="c-btn">VIEW DETAILS</p></div>
                            </div>
                        </div>
                    </a></div>
            </div>
        </div>

        <p class="c-btn-more-wrap">
        <div class="spinner" role="progressbar" style="position: absolute; width: 0px; z-index: 2000000000; left: 50%; top: 50%;"></div>
            <a class="c-btn c-btn--more" data-j-selector="more">
                <span class="c-btn--more__text">MORE PLANS</span>
            </a>
        </p>
    </section>
@stop