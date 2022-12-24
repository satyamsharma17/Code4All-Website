import React from 'react'

export default function tabsection() {
    return (
        <>
            <div id="features" class="tabs">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="above-heading">FEATURES</div>
                            <h2 class="h2-heading">Marketing Automation</h2>
                            <p class="p-heading">Take your business strategy to the next level and automatize your marketing tasks to save time for product development. Tivo can provide results in less than 2 weeks</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">


                            <ul class="nav nav-tabs" id="argoTabs" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="nav-tab-1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true"><i class="fas fa-list"></i>List Builder</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="nav-tab-2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false"><i class="fas fa-envelope-open-text"></i>Campaigns</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="nav-tab-3" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false"><i class="fas fa-chart-bar"></i>Analytics</a>
                                </li>
                            </ul>



                            <div class="tab-content" id="argoTabsContent">

                                <div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="image-container">
                                                <img class="img-fluid" src="images/features-1.png" alt="alternative" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="text-container">
                                                <h3>List Building Is Easier Than Ever</h3>
                                                <p>It's very easy to start using Tivo. You just need to fill out and submit the <a class="blue page-scroll" href="sign-up.html">Sign Up Form</a> and you will receive access to the app and all of its features in no more than 24h.</p>
                                                <ul class="list-unstyled li-space-lg">
                                                    <li class="media">
                                                        <i class="fas fa-square"></i>
                                                        <div class="media-body">Create and embed on websites newsletter sign up forms</div>
                                                    </li>
                                                    <li class="media">
                                                        <i class="fas fa-square"></i>
                                                        <div class="media-body">Manage forms and landing pages for your services</div>
                                                    </li>
                                                    <li class="media">
                                                        <i class="fas fa-square"></i>
                                                        <div class="media-body">Add and remove subscribers using the control panel</div>
                                                    </li>
                                                </ul>
                                                <a class="btn-solid-reg popup-with-move-anim" href="#details-lightbox-1">LIGHTBOX</a>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="image-container">
                                                    <img class="img-fluid" src="images/features-2.png" alt="alternative" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="text-container">
                                                    <h3>Campaigns Monitoring Tools</h3>
                                                    <p>Campaigns monitoring is a feature we've developed since the beginning because it's at the core of Tivo and basically to any marketing activity focused on results.</p>
                                                    <ul class="list-unstyled li-space-lg">
                                                        <li class="media">
                                                            <i class="fas fa-square"></i>
                                                            <div class="media-body">Easily plan campaigns and schedule their starting date</div>
                                                        </li>
                                                        <li class="media">
                                                            <i class="fas fa-square"></i>
                                                            <div class="media-body">Start campaigns and follow their evolution closely</div>
                                                        </li>
                                                        <li class="media">
                                                            <i class="fas fa-square"></i>
                                                            <div class="media-body">Evaluate campaign results and optimize future actions</div>
                                                        </li>
                                                    </ul>
                                                    <a class="btn-solid-reg popup-with-move-anim" href="#details-lightbox-2">LIGHTBOX</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="image-container">
                                                    <img class="img-fluid" src="images/features-3.png" alt="alternative" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="text-container">
                                                    <h3>Analytics Control Panel</h3>
                                                    <p>Analytics control  panel is important for every marketing team so it's beed implemented from the begging and designed to produce reports based on very little input information.</p>
                                                    <ul class="list-unstyled li-space-lg">
                                                        <li class="media">
                                                            <i class="fas fa-square"></i>
                                                            <div class="media-body">If you set it up correctly you will get acces to great intel</div>
                                                        </li>
                                                        <li class="media">
                                                            <i class="fas fa-square"></i>
                                                            <div class="media-body">Easy to integrate in your websites and landing pages</div>
                                                        </li>
                                                        <li class="media">
                                                            <i class="fas fa-square"></i>
                                                            <div class="media-body">The generated reports are important for your strategy</div>
                                                        </li>
                                                    </ul>
                                                    <a class="btn-solid-reg popup-with-move-anim" href="#details-lightbox-3">LIGHTBOX</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
