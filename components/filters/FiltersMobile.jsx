import React from 'react';

export default function FiltersMobile() {
  return (
    <>
      <div className={styles.catalog__bottom__filters__inner}>
        <FiltersPopupTop
          resetBtnText="Сбросить все"
          title="Фильтры"
          resetFilters={resetFilters}
          resetFilterBtnDisabled={resetFilterBtnDisabled}
          closePopup={closePopup}
        />
        <div className={styles.filters__boiler_manufacturers}>
          <button
            className={`${styles.filters__manufacturer__btn} ${darkModeClass}`}
            onClick={handleOpenBoilers}>
            Производитель котлов
          </button>
          <FiltersPopup
            title="Производитель котлов"
            resetFilterBtnDisabled={!isAnyBoilerManufacturerChecked}
            updateManufacturer={updateBoilerManufacturer}
            setManufacturer={setBoilerManufacturers}
            applyFilters={applyFiltersAndClosePopup}
            manufacturersList={boilerManufacturers}
            resetAllManufacturers={resetAllBoilerManufacturers}
            handleClosePopup={handleCloseBoilers}
            openPopup={openBoilers}
          />
        </div>
        <div className={styles.filters__boiler_manufacturers}>
          <button
            className={`${styles.filters__manufacturer__btn} ${darkModeClass}`}
            onClick={handleOpenParts}>
            Производитель запчастей
          </button>
          <FiltersPopup
            title="Производитель запчастей"
            resetFilterBtnDisabled={!isAnyPartsManufacturerChecked}
            updateManufacturer={updatePartsManufacturer}
            setManufacturer={setPartsManufacturers}
            applyFilters={applyFiltersAndClosePopup}
            manufacturersList={partsManufacturers}
            resetAllManufacturers={resetAllPartsManufacturers}
            handleClosePopup={handleCloseParts}
            openPopup={openParts}
          />
        </div>
        <div className={styles.filters__price}>
          <Accordion
            title="Цена"
            titleClass={`${styles.filters__manufacturer__btn} ${darkModeClass}`}
            hideArrowClass={styles.hide_arrow}
            isMobileForFilters={isMobile}>
            <div className={styles.filters__manufacturer__inner}>
              <PriceRange
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                setIsPriceRangeChanged={setIsPriceRangeChanged}
              />
              <div style={{ height: 24 }} />
            </div>
          </Accordion>
        </div>
      </div>
      <div className={styles.filters__actions}>
        <button
          className={styles.filters__actions__show}
          onClick={applyFiltersAndClosePopup}
          disabled={resetFilterBtnDisabled}>
          {spinner ? (
            <span className={spinnerStyles.spinner} style={{ top: 6, left: '47%' }} />
          ) : (
            'Показать'
          )}
        </button>
      </div>
    </>
  );
}
