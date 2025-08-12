import React from "react";
import "../styles/DoubleViewCalendar.css";

/**
 * PUBLIC_INTERFACE
 * DoubleViewScreen
 * Renders the Figma "Double-view calendar" screen with two calendar panes and a hand overlay.
 *
 * Returns:
 *  A main region containing the double calendar layout styled per the provided CSS.
 */
function DoubleViewScreen() {
  return (
    <main className="screen-double-view" aria-label="Double-view Calendar Screen">
      <section className="double-view" aria-label="Double calendar">
        {/* Left calendar (April 2021), only Previous button */}
        <div className="cal-card" aria-label="Calendar: April 2021">
          <div className="calendar">
            {/* Header */}
            <div className="cal-header">
              <button className="nav-btn" type="button" aria-label="Previous month" data-action="prev">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.7 5.3a1 1 0 0 1 0 1.4L10.41 12l4.3 5.3a1 1 0 0 1-1.54 1.28l-5-6.2a1 1 0 0 1 0-1.28l5-6.2a1 1 0 0 1 1.54 0z" />
                </svg>
              </button>

              <div className="month-year" aria-label="Month and Year">
                <div className="month" data-role="dropdown" data-label="Month">
                  <span className="label">April</span>
                  <svg className="dropdown-icon" viewBox="0 0 8 8" aria-hidden="true">
                    <path d="M1 3l3 3 3-3" />
                  </svg>
                </div>
                <div className="year" data-role="dropdown" data-label="Year">
                  <span className="label">2021</span>
                  <svg className="dropdown-icon" viewBox="0 0 8 8" aria-hidden="true">
                    <path d="M1 3l3 3 3-3" />
                  </svg>
                </div>
              </div>

              {/* Spacer (no Next button for the left calendar) */}
              <span className="nav-spacer" aria-hidden="true"></span>
            </div>

            {/* Day of Week */}
            <div className="dow-row" aria-label="Days of week">
              <div className="dow-cell"><span className="text">Mo</span></div>
              <div className="dow-cell"><span className="text">Tu</span></div>
              <div className="dow-cell"><span className="text">We</span></div>
              <div className="dow-cell"><span className="text">Th</span></div>
              <div className="dow-cell"><span className="text">Fr</span></div>
              <div className="dow-cell"><span className="text">Sa</span></div>
              <div className="dow-cell"><span className="text">Su</span></div>
            </div>

            {/* Weeks (April 2021) */}
            <div className="weeks" aria-label="Weeks">
              {/* Week 1 */}
              <div className="week-row" aria-label="Week 1">
                <div className="day disabled"><span className="num">29</span></div>
                <div className="day disabled"><span className="num">30</span></div>
                <div className="day disabled"><span className="num">31</span></div>
                <div className="day regular"><span className="num">1</span></div>
                <div className="day regular"><span className="num">2</span></div>
                <div className="day regular"><span className="num">3</span></div>
                <div className="day regular"><span className="num">4</span></div>
              </div>
              {/* Week 2 */}
              <div className="week-row" aria-label="Week 2">
                <div className="day regular"><span className="num">5</span></div>
                <div className="day regular"><span className="num">6</span></div>
                <div className="day today"><span className="num">7</span></div>
                <div className="day regular"><span className="num">8</span></div>
                <div className="day regular"><span className="num">9</span></div>
                <div className="day regular"><span className="num">10</span></div>
                <div className="day regular"><span className="num">11</span></div>
              </div>
              {/* Week 3 */}
              <div className="week-row" aria-label="Week 3">
                <div className="day regular"><span className="num">12</span></div>
                <div className="day regular"><span className="num">13</span></div>
                <div className="day regular"><span className="num">14</span></div>
                <div className="day regular"><span className="num">15</span></div>
                <div className="day regular"><span className="num">16</span></div>
                <div className="day regular"><span className="num">17</span></div>
                <div className="day regular"><span className="num">18</span></div>
              </div>
              {/* Week 4 */}
              <div className="week-row" aria-label="Week 4">
                <div className="day regular"><span className="num">19</span></div>
                <div className="day regular"><span className="num">20</span></div>
                <div className="day regular"><span className="num">21</span></div>
                <div className="day regular"><span className="num">22</span></div>
                <div className="day regular"><span className="num">23</span></div>
                <div className="day regular"><span className="num">24</span></div>
                <div className="day regular"><span className="num">25</span></div>
              </div>
              {/* Week 5 */}
              <div className="week-row" aria-label="Week 5">
                <div className="day regular"><span className="num">26</span></div>
                <div className="day regular"><span className="num">27</span></div>
                <div className="day regular"><span className="num">28</span></div>
                <div className="day regular"><span className="num">29</span></div>
                <div className="day regular"><span className="num">30</span></div>
                <div className="day disabled"><span className="num">1</span></div>
                <div className="day disabled"><span className="num">2</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider" role="separator" aria-orientation="vertical"></div>

        {/* Right calendar (May 2021), only Next button */}
        <div className="cal-card" aria-label="Calendar: May 2021">
          <div className="calendar">
            {/* Header */}
            <div className="cal-header">
              {/* Spacer (no Previous button for the right calendar) */}
              <span className="nav-spacer" aria-hidden="true"></span>

              <div className="month-year" aria-label="Month and Year">
                <div className="month" data-role="dropdown" data-label="Month">
                  <span className="label">May</span>
                  <svg className="dropdown-icon" viewBox="0 0 8 8" aria-hidden="true">
                    <path d="M1 3l3 3 3-3" />
                  </svg>
                </div>
                <div className="year" data-role="dropdown" data-label="Year">
                  <span className="label">2021</span>
                  <svg className="dropdown-icon" viewBox="0 0 8 8" aria-hidden="true">
                    <path d="M1 3l3 3 3-3" />
                  </svg>
                </div>
              </div>

              <button className="nav-btn" type="button" aria-label="Next month" data-action="next">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9.3 18.7a1 1 0 0 1 0-1.4L13.59 12l-4.3-5.3A1 1 0 1 1 10.83 5l5 6.2a1 1 0 0 1 0 1.28l-5 6.2a1 1 0 0 1-1.54 0z" />
                </svg>
              </button>
            </div>

            {/* Day of Week */}
            <div className="dow-row" aria-label="Days of week">
              <div className="dow-cell"><span className="text">Mo</span></div>
              <div className="dow-cell"><span className="text">Tu</span></div>
              <div className="dow-cell"><span className="text">We</span></div>
              <div className="dow-cell"><span className="text">Th</span></div>
              <div className="dow-cell"><span className="text">Fr</span></div>
              <div className="dow-cell"><span className="text">Sa</span></div>
              <div className="dow-cell"><span className="text">Su</span></div>
            </div>

            {/* Weeks (May 2021) */}
            <div className="weeks" aria-label="Weeks">
              {/* Week 1 */}
              <div className="week-row" aria-label="Week 1">
                <div className="day disabled"><span className="num">29</span></div>
                <div className="day disabled"><span className="num">30</span></div>
                <div className="day disabled"><span className="num">31</span></div>
                <div className="day disabled"><span className="num">1</span></div>
                <div className="day disabled"><span className="num">2</span></div>
                <div className="day regular"><span className="num">1</span></div>
                <div className="day regular"><span className="num">2</span></div>
              </div>
              {/* Week 2 */}
              <div className="week-row" aria-label="Week 2">
                <div className="day regular"><span className="num">3</span></div>
                <div className="day regular"><span className="num">4</span></div>
                <div className="day regular"><span className="num">5</span></div>
                <div className="day regular"><span className="num">6</span></div>
                <div className="day regular"><span className="num">7</span></div>
                <div className="day regular"><span className="num">8</span></div>
                <div className="day regular"><span className="num">9</span></div>
              </div>
              {/* Week 3 */}
              <div className="week-row" aria-label="Week 3">
                <div className="day regular"><span className="num">10</span></div>
                <div className="day regular"><span className="num">11</span></div>
                <div className="day regular"><span className="num">12</span></div>
                <div className="day regular"><span className="num">13</span></div>
                <div className="day regular"><span className="num">14</span></div>
                <div className="day regular"><span className="num">15</span></div>
                <div className="day regular"><span className="num">16</span></div>
              </div>
              {/* Week 4 */}
              <div className="week-row" aria-label="Week 4">
                <div className="day regular"><span className="num">17</span></div>
                <div className="day regular"><span className="num">18</span></div>
                <div className="day regular"><span className="num">19</span></div>
                <div className="day hover"><span className="num">20</span></div>
                <div className="day regular"><span className="num">21</span></div>
                <div className="day regular"><span className="num">22</span></div>
                <div className="day regular"><span className="num">23</span></div>
              </div>
              {/* Week 5 */}
              <div className="week-row" aria-label="Week 5">
                <div className="day regular"><span className="num">24</span></div>
                <div className="day regular"><span className="num">25</span></div>
                <div className="day regular"><span className="num">26</span></div>
                <div className="day regular"><span className="num">27</span></div>
                <div className="day regular"><span className="num">28</span></div>
                <div className="day regular"><span className="num">29</span></div>
                <div className="day regular"><span className="num">30</span></div>
              </div>
              {/* Week 6 */}
              <div className="week-row" aria-label="Week 6">
                <div className="day regular"><span className="num">31</span></div>
                <div className="day disabled"><span className="num">1</span></div>
                <div className="day disabled"><span className="num">2</span></div>
                <div className="day disabled"><span className="num">3</span></div>
                <div className="day disabled"><span className="num">4</span></div>
                <div className="day disabled"><span className="num">5</span></div>
                <div className="day disabled"><span className="num">6</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hand overlay: Ellipse with faint pink and an inner hand icon placeholder */}
      <div className="hand" aria-hidden="true">
        <span className="hand-icon" aria-hidden="true">🤚</span>
      </div>
    </main>
  );
}

export default DoubleViewScreen;
