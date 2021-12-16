import {chain, externalSchematic, Rule, SchematicContext, Tree} from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function workspace(_options: any): Rule {
    return (_tree: Tree, _context: SchematicContext) => {
        return chain([
            externalSchematic('@schematics/angular', 'ng-new', {version: '^13.0.0'})
        ]);
    };
}
