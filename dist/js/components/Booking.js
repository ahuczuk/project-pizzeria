import { templates, select} from '../settings.js';
import AmountWidget from './AmountWidget.js';
import DatePicker from './DatePicker.js';
import HourPicker from './HourPicker.js';

class Booking{
  constructor(element){
    const thisBooking = this;

    thisBooking.element = element;
    thisBooking.render(element);
    thisBooking.initWidgets();
  }

  render(element){
    const thisBooking = this;

    const generatedHTML = templates.bookingWidget();
    thisBooking.dom = {};
    thisBooking.dom.wrapper = element;
    thisBooking.dom.wrapper.innerHTML = generatedHTML;

    thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);
    thisBooking.dom.datePicker = element.querySelector(select.widgets.datePicker.wrapper);
    thisBooking.dom.hourPicker = element.querySelector(select.widgets.hourPicker.wrapper);

  }

  initWidgets(){
    const thisBooking = this;

    thisBooking.peopleAmountWidget = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.dom.peopleAmount.addEventListener('updated', function(){

    });

    thisBooking.hoursAmountWidget = new AmountWidget(thisBooking.dom.hoursAmount);
    thisBooking.dom.hoursAmount.addEventListener('updated', function(){

    });

    thisBooking.datePicker = new DatePicker(thisBooking.dom.datePicker);
    thisBooking.dom.datePicker.addEventListener('updated', function() {
    });

    thisBooking.hourPicker = new HourPicker(thisBooking.dom.hourPicker);
    thisBooking.dom.hourPicker.addEventListener('updated', function() {
    });
  }
}


export default Booking;