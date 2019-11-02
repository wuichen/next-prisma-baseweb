import {TimePicker} from 'baseui/timepicker';
import {PropTypes} from '../const';
import {TConfig} from '../types';
import inputConfig from './input';
import selectConfig from './select';

const timepickerProps = require('!!extract-react-types-loader!../../../../src/timepicker/timepicker.js');

const TimepickerConfig: TConfig = {
  imports: {
    'baseui/timepicker': {named: ['TimePicker']},
  },
  scope: {
    TimePicker,
  },
  theme: selectConfig.theme,
  props: {
    value: {
      value: new Date().toISOString(),
      type: PropTypes.Date,
      description:
        'Optional value that can be provided to fully control the component. If not provided, TimePicker will manage state internally and default to the closest step to new Date().',
      stateful: true,
    },
    onChange: {
      value: 'date => setValue(date)',
      type: PropTypes.Function,
      description: 'Callback for when time selection changes.',
      propHook: {
        what: 'date.toISOString()',
        into: 'value',
      },
    },
    creatable: {
      value: undefined,
      type: PropTypes.Boolean,
      description: `Set to true to allow times that aren't displayed in the options list to be entered manually. Defaults to false.`,
    },
    disabled: inputConfig.props.disabled,
    format: {
      value: undefined,
      type: PropTypes.String,
      placeholder: '12',
      description:
        '12 or 24. Render options in AM/PM format or 24 hour format. Defaults to 12 hour.',
    },
    step: {
      value: undefined,
      type: PropTypes.Number,
      placeholder: '900',
      description:
        'Amount of seconds between each option time. Defaults to 900 (15 minutes).',
    },
    error: inputConfig.props.error,
    positive: inputConfig.props.positive,
    overrides: {
      value: undefined,
      type: PropTypes.Overrides,
      description: 'Lets you customize all aspects of the component.',
      names: [],
      sharedProps: {},
    },
  },
  mapTokensToProps: {
    TimePicker: timepickerProps,
  },
};

export default TimepickerConfig;
