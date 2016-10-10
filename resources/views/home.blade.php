@extends('index')
@section('home-banner')
    <section class="p-main-visual p-main-visual--large p-main-visual--movie" data-j-class="MainVisualMovie">
        <div class="p-main-visual__content">
            <div class="p-main-visual__texts">
                <div class="p-main-visual__texts__inner">
                    <h2 class="p-main-visual__heading">Authentic Wedding Photography in Japan</h2>
                    <p class="p-main-visual__lead">Amazing Japanese Locations, waiting for you</p>
                </div>
            </div>
        </div>

        <div class="p-main-visual--movie__video">
            <iframe width="200" height="113"
                    src="https://www.youtube.com/embed/8lwi9z0G8rM?feature=oembed&amp;controls=0&amp;autoplay=1&amp;showinfo=0&amp;modestbranding=1&amp;vq=hd&amp;wmode=transparent&amp;loop=1&amp;rel=0&amp;Html5=1&amp;enablejsapi=1"
                    frameborder="0" allowfullscreen frameborder="0" id="bg-youtube"></iframe>
        </div>
    </section>
@stop
@section('contain')
    <a class="p-expo-banner"
       href="hong-kong-wedding-expo/index.Html">{{ Html::image('public/images/events/img-banner-home-expo-201609-en_US.png', 'HONG KONG WEDDING EXPO 2016.07.15-2016.07.17') }}
    </a>
    <section class="c-section c-section--top">
        <h3 class="c-section__heading">Campaign</h3>
        <div class="p-pickup-campaigns" data-j-class="PickupCampaigns">
            <div class="p-pickup-campaigns__content">
                <div class="p-pickup-campaigns__items j-pickup-campaigns-items">
                    <div class="p-pickup-campaigns__item j-pickup-campaigns-item">
                        <a href="campaigns/nara-autumn-special/index.Html" class="p-campaigns-item is-size-fixed">
                            <div class="p-campaigns-item__photo">
                                {{ Html::image('public/images/banners/fb634d7e88cf5dfaa644c3e85cd955e4.jpg', '',array('width' => 840,'height' => 500)) }}
                            </div>
                            <div class="p-campaigns-item__info">
                                <div class="p-campaign-info-box-wrap">
                                    <div class="p-campaign-info-box-wrap__inner">
                                        <div class="p-campaign-info-box">
                                            <div class="p-campaign-info-box__inner">
                                                <h4 class="p-campaign-info-box__title">Autumn only! Nara "ko-yo"
                                                    kimono shooting</h4>
                                                <div class="p-discount-price">
                                                    <p class="p-discount-price__before">Special Kimono Shooting
                                                        Price</p>
                                                    <!-- <div class="p-discount-price__arrow"><img src="http://d-weddingphoto.com/cms/wp-content/themes/decollte/assets/images/top-icn-arrow.png" alt=""></div> -->
                                                    <p class="p-discount-price__after">98,800yen</p>
                                                </div>
                                                <div class="p-campaign-info-box__description">Autumn is coming!Red
                                                    gold, yellow and brown. Many colours all around.Walking aro...
                                                </div>
                                                <div class="p-campaign-info-box__btn"><p class="c-btn">VIEW
                                                        DETAILS</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a></div>
                    <div class="p-pickup-campaigns__item j-pickup-campaigns-item">
                        <a href="campaigns/autumn2016/index.Html" class="p-campaigns-item is-size-fixed">
                            <div class="p-campaigns-item__photo">
                                {{ Html::image('public/images/banners/IMG_0925-PC.jpg', '',array('width' => 840,'height'=>500)) }}
                            </div>
                            <div class="p-campaigns-item__info">
                                <div class="p-campaign-info-box-wrap">
                                    <div class="p-campaign-info-box-wrap__inner">
                                        <div class="p-campaign-info-box">
                                            <div class="p-campaign-info-box__inner">
                                                <h4 class="p-campaign-info-box__title">2016 Autumn Leaves Shooting
                                                    in Japan</h4>
                                                <div class="p-discount-price">
                                                    <p class="p-discount-price__before">Maximum</p>
                                                    <!-- <div class="p-discount-price__arrow"><img src="http://d-weddingphoto.com/cms/wp-content/themes/decollte/assets/images/top-icn-arrow.png" alt=""></div> -->
                                                    <p class="p-discount-price__after">¥50,000yen OFF</p>
                                                </div>
                                                <div class="p-campaign-info-box__description">Autumn leaves can be
                                                    enjoyed in various ways. It must be one of the great choice...
                                                </div>
                                                <div class="p-campaign-info-box__btn"><p class="c-btn">VIEW
                                                        DETAILS</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a></div>
                    <div class="p-pickup-campaigns__item j-pickup-campaigns-item">
                        <a href="campaigns/2017-hokkaido/index.Html" class="p-campaigns-item is-size-fixed">
                            <div class="p-campaigns-item__photo">
                                {{ Html::image('public/images/banners/b00ba1d8a928926a18d72c39a51ef092.jpg', '',array('width' => 840,'height'=>500)) }}
                            </div>
                            <div class="p-campaigns-item__info">
                                <div class="p-campaign-info-box-wrap">
                                    <div class="p-campaign-info-box-wrap__inner">
                                        <div class="p-campaign-info-box">
                                            <div class="p-campaign-info-box__inner">
                                                <h4 class="p-campaign-info-box__title">2017 Hokkaido Wedding Photo
                                                    Tour</h4>
                                                <div class="p-discount-price">
                                                    <p class="p-discount-price__after">300,000yen</p>
                                                </div>
                                                <div class="p-campaign-info-box__description">Japan’s northernmost
                                                    island, Hokkaido. Thanks to these unique features, this cha...
                                                </div>
                                                <div class="p-campaign-info-box__btn"><p class="c-btn">VIEW
                                                        DETAILS</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a></div>
                    <div class="p-pickup-campaigns__item j-pickup-campaigns-item">
                        <a href="campaigns/kyoto-special/index.Html" class="p-campaigns-item is-size-fixed">
                            <div class="p-campaigns-item__photo">
                                {{ Html::image('public/images/banners/SP.jpg', '',array('width' => 840,'height'=>500)) }}
                            </div>
                            <div class="p-campaigns-item__info">
                                <div class="p-campaign-info-box-wrap">
                                    <div class="p-campaign-info-box-wrap__inner">
                                        <div class="p-campaign-info-box">
                                            <div class="p-campaign-info-box__inner">
                                                <h4 class="p-campaign-info-box__title">Kyoto Summer Special
                                                    Offer</h4>
                                                <div class="p-discount-price">
                                                    <p class="p-discount-price__before">Special Price</p>
                                                    <!-- <div class="p-discount-price__arrow"><img src="http://d-weddingphoto.com/cms/wp-content/themes/decollte/assets/images/top-icn-arrow.png" alt=""></div> -->
                                                    <p class="p-discount-price__after">188,000yen</p>
                                                </div>
                                                <div class="p-campaign-info-box__description">Make your a memorable
                                                    pre-wedding photo shoot at Kyoto, where is one of the most...
                                                </div>
                                                <div class="p-campaign-info-box__btn"><p class="c-btn">VIEW
                                                        DETAILS</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a></div>
                    <div class="p-pickup-campaigns__item j-pickup-campaigns-item">
                        <a href="campaigns/nara-studio-opening/index.Html" class="p-campaigns-item is-size-fixed">
                            <div class="p-campaigns-item__photo">
                                {{ Html::image('public/images/banners/2830302207019d953b4f40a2dc7d2d82.jpg', '',array('width' => 840,'height'=>500)) }}
                            </div>
                            <div class="p-campaigns-item__info">
                                <div class="p-campaign-info-box-wrap">
                                    <div class="p-campaign-info-box-wrap__inner">
                                        <div class="p-campaign-info-box">
                                            <div class="p-campaign-info-box__inner">
                                                <h4 class="p-campaign-info-box__title">Nara　x　Deer　<br/>
                                                    〜 Super Special Price for New Studio Open 〜</h4>
                                                <div class="p-discount-price">
                                                    <p class="p-discount-price__before">Special Price only NOW</p>
                                                    <!-- <div class="p-discount-price__arrow"><img src="http://d-weddingphoto.com/cms/wp-content/themes/decollte/assets/images/top-icn-arrow.png" alt=""></div> -->
                                                    <p class="p-discount-price__after">98,800yen</p>
                                                </div>
                                                <div class="p-campaign-info-box__description">2016.05.01 Grand
                                                    Opening of Nara studio！We are pleased to announce the grand
                                                    ope...
                                                </div>
                                                <div class="p-campaign-info-box__btn"><p class="c-btn">VIEW
                                                        DETAILS</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a></div>
                    <div class="p-pickup-campaigns__item j-pickup-campaigns-item">
                        <a href="campaigns/okinawa-beach-photo-plan/index.Html"
                           class="p-campaigns-item is-size-fixed">
                            <div class="p-campaigns-item__photo">
                                {{ Html::image('public/images/banners/img02-5.jpg', '',array('width' => 840,'height'=>500)) }}</div>
                            <div class="p-campaigns-item__info">
                                <div class="p-campaign-info-box-wrap">
                                    <div class="p-campaign-info-box-wrap__inner">
                                        <div class="p-campaign-info-box">
                                            <div class="p-campaign-info-box__inner">
                                                <h4 class="p-campaign-info-box__title">Okinawa Beach Photo Plan</h4>
                                                <div class="p-discount-price">
                                                    <p class="p-discount-price__before">Special Price</p>
                                                    <!-- <div class="p-discount-price__arrow"><img src="http://d-weddingphoto.com/cms/wp-content/themes/decollte/assets/images/top-icn-arrow.png" alt=""></div> -->
                                                    <p class="p-discount-price__after">126,000yen</p>
                                                </div>
                                                <div class="p-campaign-info-box__description">Sandy beaches and the
                                                    stunning blue sea. Enjoy your Wedding Photo with excitemen...
                                                </div>
                                                <div class="p-campaign-info-box__btn"><p class="c-btn">VIEW
                                                        DETAILS</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a></div>
                    <div class="p-pickup-campaigns__item j-pickup-campaigns-item">
                        <a href="campaigns/half-day-light-plan/index.Html" class="p-campaigns-item is-size-fixed">
                            <div class="p-campaigns-item__photo">
                                {{ Html::image('public/images/banners/15_840500-1.jpg', '',array('width' => 2000,'height'=>1190)) }}
                            </div>
                            <div class="p-campaigns-item__info">
                                <div class="p-campaign-info-box-wrap">
                                    <div class="p-campaign-info-box-wrap__inner">
                                        <div class="p-campaign-info-box">
                                            <div class="p-campaign-info-box__inner">
                                                <h4 class="p-campaign-info-box__title">Half Day Light Plan</h4>
                                                <div class="p-discount-price">
                                                    <p class="p-discount-price__before">Special Price</p>
                                                    <!-- <div class="p-discount-price__arrow"><img src="http://d-weddingphoto.com/cms/wp-content/themes/decollte/assets/images/top-icn-arrow.png" alt=""></div> -->
                                                    <p class="p-discount-price__after">150,000yen</p>
                                                </div>
                                                <div class="p-campaign-info-box__description">Easy Come! Easy Go!!
                                                    Wedding Photo!!!It is no longer difficult to have an attrac...
                                                </div>
                                                <div class="p-campaign-info-box__btn"><p class="c-btn">VIEW
                                                        DETAILS</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a></div>
                </div>

                <a class="p-pickup-campaigns__next j-pickup-campaigns-next">
                    {{ Html::image('public/images/temps/top-icn-arrow-next.jpg', '') }}
                </a>
                <a class="p-pickup-campaigns__prev j-pickup-campaigns-prev">
                    {{ Html::image('public/images/temps/top-icn-arrow-prev.jpg', '') }}
                </a>
            </div>
        </div>
    </section>

    <section class="c-sention c-section--top">
        <h3 class="c-section__heading">Recommended Plans</h3>
        <div class="p-plans c-columns">
            <div class="c-column--three">
                <a class="p-plan " href="plans/yokohama-01-take-your-breath-away/index.Html">
                    <div class="p-plan__photo">
                        <div class="p-plan__photo__content">
                            {{ Html::image('public/images/albums/yokohama-01-take-your-breath-away/650410-9.jpg', '',array('width' => 650,'height'=>410)) }}
                        </div>
                    </div>
                    <div class="p-plan__box">
                        <div class="p-plan__box__inner">
                            <h4 class="p-plan__box__title">Take your breath away</h4>
                            <p class="p-plan__box__description">Put on the finest kimono to have marvellous photo
                                shoot at one of the most popul...</p>
                            <div class="p-plan__box__btn"><p class="c-btn">VIEW DETAILS</p></div>
                        </div>
                    </div>
                </a></div>
            <div class="c-column--three">
                <a class="p-plan " href="plans/kobe-01-the-cinema/index.Html">
                    <div class="p-plan__photo">
                        <div class="p-plan__photo__content">
                            {{ Html::image('public/images/albums/kobe-01-the-cinema/img01-81.jpg', 'DE & Co. Decollte Wedding Photography in Japan. A Japanese Wedding Photo Studio. | 德可莉日本專業婚紗攝影 | Kobe | 神戶 | The Cinema | 愛。電影',array('width' => 650,'height'=>410)) }}
                        </div>
                    </div>
                    <div class="p-plan__box">
                        <div class="p-plan__box__inner">
                            <h4 class="p-plan__box__title">The Cinema</h4>
                            <p class="p-plan__box__description">Would you like to make your photos like scenes from
                                a romantic film? Would you l...</p>
                            <div class="p-plan__box__btn"><p class="c-btn">VIEW DETAILS</p></div>
                        </div>
                    </div>
                </a></div>
            <div class="c-column--three">
                <a class="p-plan " href="plans/okinawa-01-sup-board-x-wedding-photo/index.Html">
                    <div class="p-plan__photo">
                        <div class="p-plan__photo__content">
                            {{ Html::image('public/images/albums/Sup-Board-Wedding-Photo/650-410_mini-2.jpg', '',array('width' => 650,'height'=>410)) }}
                        </div>
                    </div>
                    <div class="p-plan__box">
                        <div class="p-plan__box__inner">
                            <h4 class="p-plan__box__title">Sup Board x Wedding Photo</h4>
                            <p class="p-plan__box__description">Have you imagined to get into the beautiful sea with
                                Sup Board in a wedding dres...</p>
                            <div class="p-plan__box__btn"><p class="c-btn">VIEW DETAILS</p></div>
                        </div>
                    </div>
                </a></div>
        </div>
    </section>

    <section id="area" class="c-section c-section--top p-our-area" data-j-class="OurArea">
        <h3 class="c-section__heading p-our-area__ttl">Introducing Our Areas</h3>
        <p class="c-section__lead p-our-area__lead">Please select the area you are interested in having your photo
            shoot in for additional information.<br>We also offer photo shoots to special locations such as Nara and
            Hokkaido. </p>
        <div class="p-our-area__content">
            <nav class="p-our-area__nav">
                <ul class="p-area-select-nav">
                    <li class="p-area-select-nav__item"><a href="area/tokyo/index.Html"
                                                           data-map-name="tokyo">Tokyo</a></li>
                    <li class="p-area-select-nav__item"><a href="area/yokohama/index.Html" data-map-name="yokohama">Yokohama</a>
                    </li>
                    <li class="p-area-select-nav__item"><a href="area/mt-fuji/index.Html" data-map-name="mt-fuji">Mt.
                            Fuji</a></li>
                    <li class="p-area-select-nav__item"><a href="area/nagoya/index.Html"
                                                           data-map-name="nagoya">Nagoya</a>
                    </li>
                    <li class="p-area-select-nav__item"><a href="area/kyoto/index.Html"
                                                           data-map-name="kyoto">Kyoto</a></li>
                    <li class="p-area-select-nav__item"><a href="area/nara/index.Html" data-map-name="nara">Nara</a>
                    </li>
                    <li class="p-area-select-nav__item"><a href="area/osaka/index.Html"
                                                           data-map-name="osaka">Osaka</a></li>
                    <li class="p-area-select-nav__item"><a href="area/kobe/index.Html" data-map-name="kobe">Kobe</a>
                    </li>
                    <li class="p-area-select-nav__item"><a href="area/fukuoka/index.Html" data-map-name="fukuoka">Fukuoka</a>
                    </li>
                    <li class="p-area-select-nav__item"><a href="area/okinawa/index.Html" data-map-name="okinawa">Okinawa</a>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="p-our-area__map">
            <div class="p-our-area__map__contents">
            {{ Html::image('public/images/areas/img-home-map--tokyo.jpg', '',array('class'=>'p-our-area__map__content','data-map-img-name'=>'tokyo')) }}
            {{ Html::image('public/images/areas/img-home-map--yokohama.jpg', '',array('class'=>'p-our-area__map__content','data-map-img-name'=>'yokohama')) }}
            {{ Html::image('public/images/areas/img-home-map--mt-fuji.jpg', '',array('class'=>'p-our-area__map__content','data-map-img-name'=>'mt-fuji')) }}
            {{ Html::image('public/images/areas/img-home-map--nagoya.jpg', '',array('class'=>'p-our-area__map__content','data-map-img-name'=>'nagoya')) }}
            {{ Html::image('public/images/areas/img-home-map--kyoto.jpg', '',array('class'=>'p-our-area__map__content','data-map-img-name'=>'kyoto')) }}
            {{ Html::image('public/images/areas/img-home-map--nara.jpg', '',array('class'=>'p-our-area__map__content','data-map-img-name'=>'nara')) }}
            {{ Html::image('public/images/areas/img-home-map--osaka.jpg', '',array('class'=>'p-our-area__map__content','data-map-img-name'=>'osaka')) }}
            {{ Html::image('public/images/areas/img-home-map--kobe.jpg', '',array('class'=>'p-our-area__map__content','data-map-img-name'=>'kobe')) }}
            {{ Html::image('public/images/areas/img-home-map--fukuoka.jpg', '',array('class'=>'p-our-area__map__content','data-map-img-name'=>'fukuoka')) }}
            {{ Html::image('public/images/areas/img-home-map--okinawa.jpg', '',array('class'=>'p-our-area__map__content','data-map-img-name'=>'okinawa')) }}
            {{ Html::image('public/images/areas/img-home-map--no-select.jpg', '',array('class'=>'p-our-area__map__content p-our-area__map__content--is-active','data-map-name'=>'no-select')) }}

            <!--             <img class="p-our-area__map__content"
                         src="cms/wp-content/themes/decollte/assets/images/img-home-map--tokyo.jpg" alt=""
                         data-map-img-name="tokyo">
                    <img class="p-our-area__map__content"
                         src="cms/wp-content/themes/decollte/assets/images/img-home-map--yokohama.jpg" alt=""
                         data-map-img-name="yokohama">
                    <img class="p-our-area__map__content"
                         src="cms/wp-content/themes/decollte/assets/images/img-home-map--mt-fuji.jpg" alt=""
                         data-map-img-name="mt-fuji">
                    <img class="p-our-area__map__content"
                         src="cms/wp-content/themes/decollte/assets/images/img-home-map--nagoya.jpg" alt=""
                         data-map-img-name="nagoya">
                    <img class="p-our-area__map__content"
                         src="cms/wp-content/themes/decollte/assets/images/img-home-map--kyoto.jpg" alt=""
                         data-map-img-name="kyoto">
                    <img class="p-our-area__map__content"
                         src="cms/wp-content/themes/decollte/assets/images/img-home-map--nara.jpg" alt=""
                         data-map-img-name="nara">
                    <img class="p-our-area__map__content"
                         src="cms/wp-content/themes/decollte/assets/images/img-home-map--osaka.jpg" alt=""
                         data-map-img-name="osaka">
                    <img class="p-our-area__map__content"
                         src="cms/wp-content/themes/decollte/assets/images/img-home-map--kobe.jpg" alt=""
                         data-map-img-name="kobe">
                    <img class="p-our-area__map__content"
                         src="cms/wp-content/themes/decollte/assets/images/img-home-map--fukuoka.jpg" alt=""
                         data-map-img-name="fukuoka">
                    <img class="p-our-area__map__content"
                         src="cms/wp-content/themes/decollte/assets/images/img-home-map--okinawa.jpg" alt=""
                         data-map-img-name="okinawa">
                    <img class="p-our-area__map__content p-our-area__map__content--is-active"
                         src="cms/wp-content/themes/decollte/assets/images/img-home-map--no-select.jpg" alt=""
                         data-map-name="no-select"> -->
            </div>
        </div>
    </section>
@stop