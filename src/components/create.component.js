import { Component } from "../core/component";
import { Form } from "../core/form";
import { Validators } from "../core/validators";
import { apiService, ApiService } from "../services/api.service";

export class CreateComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.$el.addEventListener("submit", submitHandler.bind(this));

    this.form = new Form(this.$el, {
      title: [Validators.required],
      fulltext: [Validators.required, Validators.minLength(10)],
    });
  }
}

async function submitHandler(event) {
  event.preventDefault();

  if (this.form.isValid()) {
    const formData = {
      type: this.$el.type.value,
      ...this.form.value(),
      date: getDateNow(),
    };

    await apiService.createPost(formData);
    this.form.clear();
    alert("запись создана в БД");
  }
}

function getDateNow() {
  let dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1; //months from 1-12
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();
  return day + "." + month + "." + year;
}
