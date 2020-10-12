import React from "react";


const Contacts = ()=> {
    return (<div class="row">
            <div class="col-12">
                <h2 class="contact-title">Отправьте нам сообщение</h2>
            </div>
            <div class="col-lg-8">
                <form class="form-contact contact_form" action="contact_process.php" method="post" id="contactForm"
                      novalidate="novalidate">
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <textarea class="form-control w-100" name="message" id="message" cols="30" rows="9"
                                          onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'"
                                          placeholder="Введите сообщение"></textarea>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <input class="form-control valid" name="name" id="name" type="text"
                                       onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'"
                                       placeholder="Ваше имя"/>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <input class="form-control valid" name="email" id="email" type="email"
                                       onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'"
                                       placeholder="Email"/>
                            </div>
                        </div>
                    </div>
                    <div class="form-group mt-3">
                        <button type="submit" class="button button-contactForm boxed-btn">Отправить</button>
                    </div>
                </form>
            </div>
            <div class="col-lg-3 offset-lg-1">
                <div class="media contact-info">
                    <span class="contact-info__icon"><i class="ti-home"></i></span>
                    <div class="media-body">
                        <h3>Жаль, не California.</h3>
                        <p>Коммунарка стрит 55</p>
                    </div>
                </div>
                <div class="media contact-info">
                    <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                    <div class="media-body">
                        <h3>+7(899)889-78-78</h3>
                        <p>С пн по пт с 10 до 21</p>
                    </div>
                </div>
                <div class="media contact-info">
                    <span class="contact-info__icon"><i class="ti-email"></i></span>
                    <div class="media-body">
                        <h3>support@gruzik.com</h3>
                        <p>Для технических вопросов</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Contacts;