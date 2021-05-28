import { styleSheetSerializer } from 'jest-styled-components/serializer';
import 'jest-styled-components';

expect.addSnapshotSerializer(styleSheetSerializer);
