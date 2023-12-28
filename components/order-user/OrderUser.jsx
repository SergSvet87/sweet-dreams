import classNames from 'classnames';

import styles from './order-user.module.css';

export const OrderUser = () => {
  // const { isOpen } = useSelector((state) => state.modalDelivery);
  // const form = useSelector((state) => state.formDelivery);
  // const { orderList } = useSelector((state) => state.order);

  // const handleInputChange = (e) => {
  //   updateFormValue({
  //     field: e.target.name,
  //     value: e.target.value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   submitForm({
  //     ...form,
  //     orderList,
  //   });
  // };

  return (
    // isOpen && (
      <div
        className={styles.modal}
        // onClick={({ target, currentTarge }) => {
        //   if (target === currentTarge) {
        //     dispatch(closeModal());
        //   }
        // }}
        >
        <div className={styles.modal__order}>
          <div className={styles.container}>
            <h2 className={styles.title}>Оформлення замовлення <br /> введіть свої дані для замовлення</h2>

            <form className={styles.form} id="order-data" 
              // onSubmit={handleSubmit}
              >
              <fieldset className={styles.fieldset}>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  // value={form.name}
                  placeholder="Ваше имя"
                  // onChange={handleInputChange}
                />
                <input
                  className={styles.input}
                  type="text"
                  name="surname"
                  // value={form.surname}
                  placeholder="Ваша Фамілія"
                  // onChange={handleInputChange}
                />                
              </fieldset>
              <input
                  className={styles.input}
                  type="email"
                  name="email"
                  // value={form.email}
                  placeholder="Ваш email"
                  // onChange={handleInputChange}
                />
                <input
                  className={styles.input}
                  type="tel"
                  name="phone"
                  // value={form.phone}
                  placeholder="Ваш телефон"
                  // onChange={handleInputChange}
                />
                <input
                  className={styles.input}
                  type="text"
                  name="address"
                  // value={form.address}
                  placeholder="Місто"
                  // onChange={handleInputChange}
                />
            </form>

            <button className={styles.submit} type="submit" form="order">
              Оформити замовлення
            </button>
          </div>

          <button
            className={styles.modal__close}
            type="button"
            // onClick={() => dispatch(closeModal())}
            >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="5.07422"
                y="5.28247"
                width="1"
                height="20"
                transform="rotate(-45 5.07422 5.28247)"
              />
              <rect
                x="5.78125"
                y="19.4246"
                width="1"
                height="20"
                transform="rotate(-135 5.78125 19.4246)"
              />
            </svg>
          </button>
        </div>
      </div>
    // )
  );
};
